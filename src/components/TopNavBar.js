import React from "react";
import "./Style.scss";
export default function TopNavBar() {

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
      </div>
    </div>
  );
}

