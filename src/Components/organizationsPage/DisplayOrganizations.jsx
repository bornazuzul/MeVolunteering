import React from "react";
import { useContext } from "react";
import classes from "./DisplayOrganizations.module.css";
import Organizations from "./Organizations";
import { UserStatusContext } from "../../store/UserStatusProvider";

function DisplayOrganizations(props) {
  const context = useContext(UserStatusContext);

  const approved = props.donations.filter(
    (donation) => donation.category === "donirano"
  );
  const giveDonations = props.donations.filter(
    (donation) => donation.category === "nudi"
  );

  return (
    <div className={classes.donations}>
      {/* <Donations
        donations={needDonations}
        heading={"Tražimo"}
        color={"red"}
        delete={props.deleteDonation}
        donate={props.donateDonation}
      /> */}
      <Organizations
        donations={approved}
        heading={"List of organizations"}
        color="green"
        delete={props.deleteDonation}
        // reList={props.reListDonation}
      />
      {context.userStatus === "admin" &&
        <Organizations
        donations={giveDonations}
        heading={"Approval requests"}
        color={"yellow"}
        donate={props.donateDonation}
      />
      }
    </div>
  );
}

export default DisplayOrganizations;
