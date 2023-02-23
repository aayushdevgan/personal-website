import React from "react";
import "./Style.scss";

export default function ResumeTab() {
  return (
    <div className="resume-container">
        <img className="resume-icon" src={require("../assets/resume.png")}/>
        <hr style={{ border: "1px solid #E9E9E9" }} />
    </div>
  );
}
