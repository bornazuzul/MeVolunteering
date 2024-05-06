import React from "react";
import classes from "./Activity.module.css";
import { UserStatusContext } from "../../store/UserStatusProvider";
import { useContext, useState } from "react";
import Customizing from "./Customizing";
import Button from "../UI/Button";

function Activity(props) {
  const userStatus = useContext(UserStatusContext);
  const [customizing, setCustomizing] = useState(false);

  const applied = props.activity.applied ? "Applied" : "Not applied";
  const actClass = props.activity.applied
    ? classes.activity + " " + classes.applied
    : classes.activity + " " + classes["not-applied"];

  const applyHandler = () => {
    props.apply(props.activity.id);
  };

  const deleteHandler = () => {
    props.delete(props.activity.id);
  };

  const openCloseCustomize = () => {
    setCustomizing((prevState) => !prevState);
  };

  const saveChangesHandler = (item) => {
    openCloseCustomize();
    props.updateActivity(item);
  };

  return (
    <>
      {customizing && (
        <Customizing
          saveChanges={saveChangesHandler}
          close={openCloseCustomize}
          volunteer={props.activity}
        />
      )}
      <div className={actClass}>
        <img src={props.activity.image} />
        <div className={classes.info}>
          <div className={classes["name-description"]}>
            <h2>{props.activity.name}</h2>
            <i>{props.activity.description}</i>
          </div>
          <div className={classes.properties}>
            <p>
              <b>Type: </b>
              {props.activity.type}
            </p>
            <p>
              <b>Date of birth: </b>
              {props.activity.appointment}
            </p>
          </div>
        </div>
        <div className={classes.buttons}>
          {/* {!props.activity.applied && (
            // <Button type="green" onClick={applyHandler} label={"Apply"} />
          
            <button className={classes.Btn} onClick={applyHandler}>
              <div className={classes.svgWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 42 42"
                  className={classes.svgIcon}
                >
                  <path
                    strokeWidth="5"
                    stroke="#fff"
                    d="M9.14073 2.5H32.8593C33.3608 2.5 33.8291 2.75065 34.1073 3.16795L39.0801 10.6271C39.3539 11.0378 39.5 11.5203 39.5 12.0139V21V37C39.5 38.3807 38.3807 39.5 37 39.5H5C3.61929 39.5 2.5 38.3807 2.5 37V21V12.0139C2.5 11.5203 2.6461 11.0378 2.91987 10.6271L7.89266 3.16795C8.17086 2.75065 8.63921 2.5 9.14073 2.5Z"
                  ></path>
                  <rect
                    strokeWidth="3"
                    stroke="#fff"
                    rx="2"
                    height="4"
                    width="11"
                    y="18.5"
                    x="15.5"
                  ></rect>
                  <path strokeWidth="5" stroke="#fff" d="M1 12L41 12"></path>
                </svg>
                <div className={classes.text}>Apply</div>
              </div>
            </button>

          )} */}

          {userStatus.userStatus === "admin" && (
            // <Button
            //   type="yellow"
            //   onClick={openCloseCustomize}
            //   label={"Modify"}
            // />

            <div className={classes.flex}>
              <button className={classes.editBtn} onClick={openCloseCustomize}>
                <svg height="1em" viewBox="0 0 512 512">
                  <path
                    d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                  ></path>
                </svg>
              </button>

              <button className={classes.delete} onClick={deleteHandler}>
                <svg className={classes.deleteIcon} viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Activity;