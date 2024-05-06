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
  const [name, setName] = useState(props.volunteer.name);
  const [description, setDescription] = useState(props.volunteer.description);
  const [type, setType] = useState(props.volunteer.type);
  const [appointmentDate, setAppointmentDate] = useState(
    props.volunteer.appointment
  );
  const [applied, setApplied] = useState(props.volunteer.adopted);
  const [imageLink, setImageLink] = useState(props.volunteer.image);
  const [displayImageLink, setDisplayImageLink] = useState(props.volunteer.image);

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
      id: props.volunteer.id,
      name: name,
      description: description,
      type: type,
      appointment: appointment,
      image: imageLink,
    });
  };

  return (
    <Modal closeCustomize={props.close} activity={props.volunteer}>
      <div className={classes.activity}>
        <div className={classes.center}>
          <ImageInput
            imageLink={imageLink}
            setImageLink={setImageLink}
            displayImageLink={displayImageLink}
            setDisplayImageLink={setDisplayImageLink}
          />
          <div className={classes.info}>
            <div className={classes["name-description"]}>
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                value={name}
                fullWidth
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
                value={description}
                fullWidth
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className={classes.properties}>
              <SelectInput
                value={type}
                label={"Type"}
                handleChange={setType}
                options={types}
              />
              <DateInput
                value={appointmentDate}
                handleChange={setAppointmentDate}
                label={"Date"}
              />
            </div>
          </div>
          <div className={classes.buttons}>
            <Button
              type="yellow"
              onClick={saveChangesHandler}
              label={"Save"}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Customizing;
