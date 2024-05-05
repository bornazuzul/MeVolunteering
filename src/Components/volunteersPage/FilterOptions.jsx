import React from "react";
import classes from "./FilterOptions.module.css";
import RadioInput from "../UI/RadioInput";
import { types, status } from "../../store/animalProperties";

const allTypes = [{ label: "All", value: "all" }, ...types];
const allStatus = [{ label: "All", value: "all" }, ...status];

function FilterOptions(props) {
  return (
    <div className={classes.filter}>
      <RadioInput
        label="Type"
        value={props.typeFilter}
        options={allTypes}
        handleChange={props.setTypeFilter}
        direction="column"
      />
    </div>
  );
}

export default FilterOptions;
