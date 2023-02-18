import React from "react";
import {BLOG_TAB, PROFILES_TAB, CONNECT_TAB, ABOUT_TAB} from "../utils/constants";

import "./TopNavBar.scss";

export default function TopNavBar({ changeActiveTab }) {
  const handleTabChange = (new_active_tab) => {
    changeActiveTab(new_active_tab);
  };
  return (
    <div className="nav-container">
        <p>
            <img
                className="profile-icon"
                src={require("../assets/profile.png")}
            /> &nbsp;
        </p>
      <p>aayushdevgan</p>
      <div className="links-container">
      <p className="nav-item" onClick={() => handleTabChange(ABOUT_TAB)}>
          About Me
      </p>
        <p className="nav-item" onClick={() => handleTabChange(BLOG_TAB)}>
          Blogs
        </p>
         <p className="nav-item" onClick={() => handleTabChange(PROFILES_TAB)}>
          Profiles
         </p>
          <p className="nav-item" onClick={() => handleTabChange(CONNECT_TAB)}>
          Connect
          </p>
      </div>
    </div>
  );
}
