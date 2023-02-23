import React from "react";
import "./Style.scss";

export default function AboutTab() {
    return (
        <div className="outer-container">
            <p className="headline-intro">I'm an engineer with experience in
                <span style={{ color: "#008AD8" }}>  Data, ML Engineering and</span>
                <span style={{ color: "#008AD8" }}> Devops</span> areas. I have a knack for breaking bigger
                problems into smaller ones and creating innovative solutions for them to create business value.<br /> <br /> <br /> <br />
                Work Experiences
            </p>
            <div className="intro-button-container">
                <a href="https://www.thoughtworks.com/en-in/">
                    <img className="profiles-icon-company" src={require("../assets/tw.png")}/>
                </a>
                <a href="https://fi.money/">
                    <img className="profiles-icon-company" src={require("../assets/fi.png")}/>
                </a>
                <a href="https://www.urbancompany.com/">
                    <img className="profiles-icon-company" src={require("../assets/uc.png")}/>
                </a>
                <a href="https://innovaccer.com/">
                    <img className="profiles-icon-company" src={require("../assets/innovaccer.png")}/>
                </a>
            </div>
        </div>
    );
}
