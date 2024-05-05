import { NavLink } from "react-router-dom";
import { UserStatusContext } from "../store/UserStatusProvider";
import { useContext } from "react";
import classes from "./Navigation.module.css";

function Navigation() {
  const { userStatus, changeUserStatus } = useContext(UserStatusContext);

  const handleUserStatusChange = () => {
    changeUserStatus();
  };

  return (
    <div className={classes.container}>
      <nav>
        <ul className={classes.nav}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/activities"
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              Activities
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/volunteers"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Volunteers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/organizations"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Organizations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Notifications
            </NavLink>
          </li>
          <div className={classes["admin-switch"]}>
          <p>Admin</p>
          {/* <Switch
            inputProps={{ "aria-label": "controlled" }}
            onChange={handleUserStatusChange}
            checked={userStatus === "admin"}
            id="swich"
          /> */}

          {/* swich v1 */}
          {/* <label>
            <input className={classes["toggle-checkbox"]} type="checkbox" inputprops={{ "aria-label": "controlled" }}
              onChange={handleUserStatusChange}
              checked={userStatus === "admin"}/>
            <div className={classes["toggle-slot"]}>
              <div className={classes["sun-icon-wrapper"]}>
                <div className={classes["iconify sun-icon"]} data-icon="feather-sun" data-inline="false"></div>
              </div>
              <div className={classes["toggle-button"]}></div>
              <div className={classes["moon-icon-wrapper"]}>
                <div className={classes["iconify moon-icon"]} data-icon="feather-moon" data-inline="false"></div>
              </div>
            </div>
          </label> */}

          <label className={classes["switch"]}>
            <input className={classes["ch"]} type="checkbox" inputprops={{ "aria-label": "controlled" }}
              onChange={handleUserStatusChange}
              checked={userStatus === "admin"}
              id="swich"/>
            <span className={classes["slider"]}></span>
          </label>


        </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
