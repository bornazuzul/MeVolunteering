import React from "react";
import FilterOptions from "../Components/activitiesPage/FilterOptions";
import SearchBar from "../Components/UI/SearchBar";
import { UserStatusContext } from "../store/UserStatusProvider";
import { useContext, useState } from "react";
import Activities from "../Components/activitiesPage/Activites";
import classes from "./ActivityPage.module.css";
import { NavLink } from "react-router-dom";

function ActivityPage() {
  const [appliedFilter, setAppliedFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const { userStatus } = useContext(UserStatusContext);

  return (
    <div className={classes["activity-page"]}>
      <h2>Volunteering activites near by</h2>
      <div className={classes["filter-display"]}>
        <div>
          {/* <SearchBar
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          /> */}
          <FilterOptions
            statusFilter={appliedFilter}
            setStatusFilter={setAppliedFilter}
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

              <NavLink to="/activities/new" end className={classes["nav-link"]}>
                <button className={classes["Btn"]}>
                  <div className={classes["sign"]}>+</div>
                  <div className={classes["text"]}>Activities</div>
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

export default ActivityPage;
