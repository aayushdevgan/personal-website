import React, { useState } from "react";
import ContactForm from "./ContactForm";
import "./ConnectTab.scss";

export default function ConnectTab() {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
  <div className="outer-container">
      <h1 className="headline">
          Want to get in touch?
      </h1>
      <div className="intro-button-container-connect">
          <button className="intro-button-contact" onClick={(e) => setShowContactForm(true)}>
              Say Hi
          </button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="https://topmate.io/aayush_devgan" target="_blank">
          <button className="intro-button-contact">
              Setup a Meet
          </button>
          </a>
          {showContactForm && (
              <ContactForm
                  setFormVisibility={(visibility) => setShowContactForm(visibility)}
              />
          )}
      </div>
  </div>
  );
}
