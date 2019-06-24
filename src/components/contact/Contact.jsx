import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [enabled, enableSubmit] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [currDate] = useState(new Date());

  const validateInput = () => {
    if (senderName.length && senderEmail.length && senderMessage.length) {
      enableSubmit(true);
    } else enableSubmit(false);
  };

  const inputHandler = ({ target }) => {
    switch (true) {
      case target.id === "sender-email":
        setSenderEmail(target.value);
        break;
      case target.id === "sender-name":
        setSenderName(target.value);
        break;
      default:
        setSenderMessage(target.value);
    }
    validateInput();
  };

  return (
    <section className="contact-section contact">
      <h1>Contact</h1>
      <section className="contact-container">
        <form
          action={`https://formspree.io/maxbsilver@gmail.com`}
          method="POST"
        >
          <div className="input-container">
            <div className="input-box">
              <label htmlFor="sender-name">Your name:</label>
              <input
                onChange={inputHandler}
                name="name"
                id="sender-name"
                type="text"
              />
            </div>
            <div className="input-box">
              <label htmlFor="sender-email">Your e-mail:</label>
              <input
                name="email"
                onChange={inputHandler}
                id="sender-email"
                type="email"
              />
            </div>
            <div className="input-box">
              <label htmlFor="message">Your message:</label>
              <textarea
                onChange={inputHandler}
                name="message"
                id="message"
                type="text"
              />
            </div>
            <input
              className={`submit-btn ${enabled && "email-btn"}`}
              type="submit"
              value="Send"
              disabled={!enabled}
            />
          </div>
        </form>
        <section className="contact-info-container">
          <p>Phone Number : 727-644-2277</p>
          <p>Email Address : Maxbsilver@gmail.com</p>
        </section>
      </section>
    </section>
  );
};

export default Contact;
