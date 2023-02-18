import React, { useState } from "react";
import "./ProfilesTab.scss";

export default function ProfilesTab() {
  return (
  <div className="outer-container">
      <h1 className="headline">
          Here are my socials 👇
      </h1>
      <div className="intro-button-container">
          <a href="https://www.linkedin.com/in/aayush-devgan-a1626a74/">
              <img className="profiles-icon" src={require("../assets/linkedin.png")}/>
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://medium.com/@aayushdevgan">
              <img className="profiles-icon" src={require("../assets/medium.png")}/>
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.instagram.com/aayush_devgan/">
              <img className="profiles-icon" src={require("../assets/instagram.png")}/>
          </a>
      </div>
  </div>
  );
}
