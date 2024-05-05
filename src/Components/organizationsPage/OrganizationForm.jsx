import React from "react";
import classes from "./OrganizationForm.module.css";
import { useState } from "react";
import Button from "../UI/Button";
import SelectInput from "../UI/SelectInput";
import TextField from "@mui/material/TextField";
import Modal from "../UI/Modal";

const organizationTypes = [
  { label: "Type of organization", value: "odaberi" },
  { label: "Recycling", value: "recycling" },
  { label: "Wildlife conservation", value: "wildlife conservation" },
  { label: "Environmental education projects", value: "environmental education projects" },
  { label: "Animal rescue and care", value: "animal rescue and care" },
  { label: "Other", value: "Other" },
];

function OrganizationForm(props) {
  const [showorganizationForm, setshoworganizationForm] = useState(false);
  const [organizationType, setorganizationType] = useState("odaberi");
  const [city, setcity] = useState("");
  const [name, setname] = useState("");
  const [showError, setShowError] = useState(false);

  const handleOpenCloseDonateForm = () => {
    setshoworganizationForm((currentState) => !currentState);
  };

  const handleNewOrganization = (e) => {
    e.preventDefault();
    if (organizationType === "odaberi" || city === "") {
      setShowError(true);
      return;
    }
    setshoworganizationForm((currentState) => !currentState);

    const labelDonationType = organizationTypes.find(
      (donation) => donation.value === organizationType
    ).label;

    const donation = {
      variant: name,
      value: city,
      description: labelDonationType,
      category: "",
    };
    props.addDonation(donation);
    setorganizationType("odaberi");
    setcity("");
    setname("");
  };

  return (
    <>
      <div className={classes["new-Organization-btn"]}>
        <Button
          onClick={handleOpenCloseDonateForm}
          label="Add"
          type="yellow"
        />
      </div>
      {showorganizationForm && (
        <Modal closeCustomize={handleOpenCloseDonateForm}>
          <div className={classes["Organization-form"]}>
            <h2>Add new organization</h2>
            {showError && <p>Incorect input</p>}
            <form className={classes["Organization-form__form"]}>
              <TextField
                label={"Name"}
                type="text"
                variant="standard"
                fullWidth
                value={name}
                onChange={(e) => setname(e.target.value)} 
              />
              <TextField
                label={"City"}
                type="text"
                variant="standard"
                fullWidth
                value={city}
                onChange={(e) => setcity(e.target.value)}
              />
              <SelectInput
                options={organizationTypes}
                label={"Type of organization"}
                value={organizationType}
                handleChange={setorganizationType}
              />

              <Button
                onClick={handleNewOrganization}
                label="Add organization"
                type="yellow"
              />
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default OrganizationForm;
