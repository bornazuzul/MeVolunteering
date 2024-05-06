import React from "react";
import Modal from "../UI/Modal";
import classes from "./Customizing.module.css";
import SelectInput from "../UI/SelectInput";
import RadioInput from "../UI/RadioInput";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import DateInput from "../UI/DateInput";
import { types, status } from "../../store/Properties";
import Button from "../UI/Button";
import ImageInput from "../UI/ImageInput";

function Customizing(props) {
  const [name, setName] = useState(props.activity.name);
  const [description, setDescription] = useState(props.activity.description);
  const [location, setLocation] = useState(props.activity.location);
  const [type, setType] = useState(props.activity.type);
  const [appointmentDate, setAppointmentDate] = useState(
    props.activity.appointment
  );
  const [applied, setApplied] = useState(props.activity.adopted);
  const [imageLink, setImageLink] = useState(props.activity.image);
  const [displayImageLink, setDisplayImageLink] = useState(props.activity.image);

  const saveChangesHandler = () => {
    if (name === "" || type === "" || imageLink === "") {
      alert("Fill in all feilds");
      return;
    }

    let appBool;
    if (typeof applied === "boolean") {
      appBool = applied;
    }
    appBool = applied === "true" ? true : false;

    // let chipBolean;
    // if (typeof chip === "boolean") {
    //   chipBolean = chip;
    // }
    // chipBolean = chip === "true" ? true : false;

    let appointment;

    if (typeof appointmentDate == "string") {
      appointment = appointmentDate.split("T")[0];
    } else {
      const date = appointmentDate.toISOString().split("T")[0];
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      appointment = newDate.toISOString().split("T")[0];
    }

    props.saveChanges({
      id: props.activity.id,
      name: name,
      description: description,
      location: location,
      type: type,
      adopted: appBool,
      appointment: appointment,
      image: imageLink,
    });
  };

  return (
    <Modal closeCustomize={props.close} activity={props.activity}>
      <div className={classes.activity}>
        <div className={classes.center}>
          <ImageInput
            imageLink={imageLink}
            setImageLink={setImageLink}
            displayImageLink={displayImageLink}
            setDisplayImageLink={setDisplayImageLink}
            disabled={true}
          />
          <div className={classes.info}>
            <div className={classes["name-description"]}>
              <p>Name: {name}</p>
              <p>Description: {description}</p>
            </div>
            <div className={classes.properties}>
              <p>Type: {type}</p>
              <p>Date: {appointmentDate}</p>
              <p>Location: {location}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Customizing;
