import React from "react";
import classes from "./InputForm.module.css";
import SelectInput from "../UI/SelectInput";
import { useState, useEffect, useContext } from "react";
import { UserStatusContext } from "../../store/UserStatusProvider";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import DateInput from "../UI/DateInput";
import ImageInput from "../UI/ImageInput";
import { types } from "../../store/Properties";
import Button from "../UI/Button";

const newTypes = [{ label: "Pick category", value: "odaberi-vrstu" }, ...types];

let initial = 0;

function InputForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("odaberi-vrstu");
  const [appointmentDate, setAppointmentDate] = useState(dayjs(new Date()));
  const [imageLink, setImageLink] = useState("");
  const [displayImageLink, setDisplayImageLink] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const userStatusCtx = useContext(UserStatusContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      type === "odaberi-vrstu" ||
      displayImageLink.trim() === ""
    ) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const newActivity = {
      name,
      description,
      type,
      appointment: appointmentDate.toISOString().split("T")[0],
      image: imageLink,
      location
    };
    props.newActivity(newActivity);

    setName("");
    setDescription("");
    setLocation("");
    setType("odaberi-vrstu");
    setAppointmentDate(dayjs(new Date()));
    setImageLink("");
    setDisplayImageLink("");
    initial++;
  };

  useEffect(() => {
    if (initial === 0) {
      return;
    } else {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
        initial = 0;
      };
    }
  }, [initial]);

  return (
    <>
      {userStatusCtx.userStatus != "admin" ? (
        <h1>Only admin can do this</h1>
      ) : (
        <>
          {showSuccess && <h2>Succesful</h2>}
          <form className={classes.center} onSubmit={handleSubmit}>
            <ImageInput
              imageLink={imageLink}
              setImageLink={setImageLink}
              displayImageLink={displayImageLink}
              setDisplayImageLink={setDisplayImageLink}
            />
            <div className={classes.info}>
              {showError && <p>Fill in all feilds</p>}

              <TextField
                id="standard-basic"
                label="Ime"
                variant="standard"
                value={name}
                fullWidth
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Opis"
                variant="standard"
                value={description}
                fullWidth
                onChange={(e) => setDescription(e.target.value)}
              />

              <SelectInput
                value={type}
                label={"Type"}
                handleChange={setType}
                options={newTypes}
              />

              <DateInput
                value={appointmentDate}
                handleChange={setAppointmentDate}
                label={"Date"}
              />

              <TextField
                id="standard-basic"
                label="Location and adress"
                variant="standard"
                value={location}
                fullWidth
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button label="Add new volunteer" type="yellow" />
          </form>
        </>
      )}
    </>
  );
}

export default InputForm;
