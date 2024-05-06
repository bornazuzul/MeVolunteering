import React from "react";
import classes from "./FilterOptions.module.css";
import RadioInput from "../UI/RadioInput";
import { types, status } from "../../store/Properties";

const allTypes = [{ label: "All", value: "all" }, ...types];
const allStatus = [{ label: "All", value: "all" }, ...status];

function FilterOptions(props) {
  return (
    <div className={classes.filter}>
      <RadioInput
        label="Status"
        value={props.statusFilter}
        options={allStatus}
        style={false}
        direction="column"
        handleChange={props.setStatusFilter}
      />
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
