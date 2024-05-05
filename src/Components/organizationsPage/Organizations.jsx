import React from "react";
import classes from "./Organizations.module.css";
import OrganizationButtons from "./OrganizationButtons";

function Organizations(props) {
  const donationContainer =
    classes["donation-container"] + " " + classes[props.color];

  if (props.donations.length === 0) {
    return (
      <div className={classes.container}>
        <h2>{props.heading}</h2>
        <p>No organizations.</p>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <h2>{props.heading}</h2>
      <div className={classes.properties}>
        <div className={classes.donation}>
          <div className={classes.variant}>
            <h3>Name</h3>
          </div>
          <div className={classes.value}>
            <h3>City</h3>
          </div>
          <div className={classes.description}>
            <h3>Description</h3>
          </div>
        </div>
        <div className={classes.button}></div>
      </div>
      <div className={classes["donation-items"]}>
        {props.donations.map((donation) => (
          <div key={donation.id} className={donationContainer}>
            <div className={classes.donation}>
              <div className={classes.variant}>
                <p>{donation.variant}</p>
              </div>
              <div className={classes.value}>
                <p>{donation.value}</p>
              </div>
              <div className={classes.description}>
                <p>{donation.description}</p>
              </div>
            </div>
            <div className={classes.button}>
              <OrganizationButtons
                category={donation.category}
                delete={props.delete}
                reList={props.reList}
                donate={props.donate}
                donation={donation}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Organizations;
