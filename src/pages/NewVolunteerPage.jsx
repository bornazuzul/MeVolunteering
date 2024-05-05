import React from "react";
import InputForm from "../Components/newActivityPage/InputForm";
import axios from "axios";

function NewActivityPage() {
  const newActivityHandler = async (activity) => {
    const chip = activity.chip === "true" ? true : false;
    const applied = activity.applied === "true" ? true : false;

    const activityForSubmit = {
      ...activity,
      chip: chip,
      adopted: applied,
    };

    try {
      axios.post(
        "https://volunteering-b71e0-default-rtdb.europe-west1.firebasedatabase.app/volunteers.json",
        activityForSubmit
      );
    } catch (error) {
      console.log(error);
    }
  };

  return <InputForm newActivity={newActivityHandler} />;
}

export default NewActivityPage;
