import React from "react";
import FilterOptions from "../Components/volunteersPage/FilterOptions";
import SearchBar from "../Components/UI/SearchBar";
import { UserStatusContext } from "../store/UserStatusProvider";
import { useContext, useState } from "react";
import Activities from "../Components/volunteersPage/Activites";
import classes from "./VolunteersPage.module.css";
import { NavLink } from "react-router-dom";

function VolunteersPage() {
  const [appliedFilter, setAppliedFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const { userStatus } = useContext(UserStatusContext);

  return (
    <div className={classes["activity-page"]}>
      <h2>Volunteers</h2>
      <div className={classes["filter-display"]}>
        <div>
          {/* <SearchBar
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          /> */}
          <FilterOptions
            adoptedFilter={appliedFilter}
            setAdoptedFilter={setAppliedFilter}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />

          {userStatus === "admin" && (
            // <button>
            //   <NavLink
            //     to="/activities/new"
            //     end
            //   >
            //     Activities
            //   </NavLink>
            // </button>

              <NavLink to="/volunteers/new" end className={classes["nav-link"]}>
                <button className={classes["Btn"]}>
                  <div className={classes["sign"]}>+</div>
                  <div className={classes["text"]}>Volunteers</div>
                </button>
              </NavLink>
          )}

        </div>
        <Activities
          searchFilter={searchFilter}
          appliedFilter={appliedFilter}
          setAppliedFilter={setAppliedFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
        />
      </div>
    </div>
  );
}

export default VolunteersPage;
