import React from "react";
import classes from "./OrganizationButtons.module.css";
import Button from "../UI/Button";
import { UserStatusContext } from "../../store/UserStatusProvider";
import { useContext } from "react";

function OrganizationButtons(props) {
  const userStatus = useContext(UserStatusContext);

  return (
    <div className={classes.buttons}>
      {props.category === "donirano" ? (
        userStatus.userStatus === "admin" ? (
          <>
            {/* <Button
              type="red"
              onClick={() => props.delete(props.donation.id)}
              label={"Delete"}
            /> */}
            <button className={classes.button} onClick={() => props.delete(props.donation.id)}>
              <svg viewBox="0 0 448 512" className={classes.svgIcon}><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
            </button>
          </>
        ) : null
      ) : props.category === "nudi" ? (
        userStatus.userStatus === "admin" ? (
          <button className={classes.buttonAcc} type="yellow"
            onClick={() => props.donate(props.donation.id)}
          >
            Accept
          </button>
        ) : null
      ) : props.category === "trazi" ? (
        userStatus.userStatus === "admin" ? (
          <>
            <Button
              type="red"
              onClick={() => props.delete(props.donation.id)}
              label={"Delete"}
            />
          </>
        ) : (
          <Button
            type="green"
            label={""}
          />
        )
      ) : null}
    </div>
  );
}

export default OrganizationButtons;
