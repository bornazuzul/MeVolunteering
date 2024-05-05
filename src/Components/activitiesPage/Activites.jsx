import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import classes from "./Activities.module.css";
import Activity from "./Activity";

function Activites(props) {
  const [activites, setActivities] = useState([]);

  const getActivites = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://volunteering-b71e0-default-rtdb.europe-west1.firebasedatabase.app/activities.json"
      );
      const activites = response.data;
      const activityArr = [];

      for (const key in activites) {
        activityArr.push({
          id: key,
          ...activites[key],
        });
      }
      setActivities(activityArr);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getActivites();
  }, [getActivites]);

  const applyHandler = async (id) => {
    try {
      const response = await axios.patch(
        `https://volunteering-b71e0-default-rtdb.europe-west1.firebasedatabase.app/activities/${id}.json`,
        { applied: true }
      );
      setActivities((currentState) =>
        currentState.map((activity) =>
        activity.id === id ? { ...activity, applied: true } : activity
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const applyHandlerFalse = async (id) => {
    try {
      const response = await axios.patch(
        `https://volunteering-b71e0-default-rtdb.europe-west1.firebasedatabase.app/activities/${id}.json`,
        { applied: false }
      );
      setActivities((currentState) =>
        currentState.map((activity) =>
        activity.id === id ? { ...activity, applied: false } : activity
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateHandler = async (activity) => {
    try {
      const response = await axios.patch(
        `https://volunteering-b71e0-default-rtdb.europe-west1.firebasedatabase.app/activities/${activity.id}.json`,
        activity
      );
      setActivities((currentState) => {
        const newArray = currentState.map((item) => {
          if (item.id === activity.id) {
            return activity;
          }
          return item;
        });
        return newArray;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteActivity = async (id) => {
    try {
      await axios.delete(
        `https://volunteering-b71e0-default-rtdb.europe-west1.firebasedatabase.app/activities/${id}.json`
      );
      setActivities((currentState) => {
        const newState = currentState.filter((activity) => activity.id !== id);
        return newState;
      });
    } catch (error) {
      console.log(error);
    }
  };

  let filteredByStatus = null;

  if (props.appliedFilter === "false") {
    filteredByStatus = false;
  } else if (props.appliedFilter === "true") {
    filteredByStatus = true;
  }

  let searchFilter =
    props.searchFilter.toLowerCase() === ""
      ? "all"
      : props.searchFilter.toLowerCase();

  return (
    <div className={classes["act"]}>
      {activites.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {activites.map((activity) =>
            (filteredByStatus === null ||
              filteredByStatus === activity.applied) &&
            (props.typeFilter === "all" || props.typeFilter === activity.type) &&
            (searchFilter === "all" ||
              searchFilter === activity.name.toLowerCase()) ? (
              <Activity
                key={activity.id}
                activity={activity}
                apply={applyHandler}
                cencel={applyHandlerFalse}
                updateActivity={updateHandler}
                delete={deleteActivity}
              />
            ) : null
          )}
        </>
      )}
    </div>
  );
}

export default Activites;
