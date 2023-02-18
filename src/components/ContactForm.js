import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./ContactForm.scss";

export default function ContactForm({ setFormVisibility }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ctaStyle =
    name && email && message ? "send-button send-button-active" : "send-button";

  return (
    <Modal
      show={true}
      onHide={() => setFormVisibility(false)}
      centered
      size="xl">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="form-inner-container">
          <img src={require("../assets/mail.png")} className="mail-icon" />
          <form action="https://formsubmit.co/29111ec7d6d513a114a2f3f3051e9e95" method="POST">
            <div className="right-container">
              <p className="modal-title">Let's get connected</p>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input-container"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail address"
                className="input-container"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="Message"
                placeholder="Message"
                className="input-container message-input"
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="cta-container">
                <button className={ctaStyle}>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
