import React from "react";
import classes from "./ContactData.module.css";

function ContactData() {
  return (
    <div className={classes["contact-data"]}>
      <h2>Contact</h2>
      <p>Contact me</p>
      <div>
        <p>
          Asress: <b>Split</b>
        </p>
        <p>
          Phone: <b>0994213780</b>
        </p>
        <p>
          Email: <b>bornazuzul@gmail.com </b>
        </p>
      </div>
    </div>
  );
}

export default ContactData;
