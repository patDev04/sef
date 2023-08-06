import React, { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    subject: "",
    help: "",
  });
  const [errorMessage, seterrorMessage] = useState({});

  const validation = (value) => {
    const error = {};
    // const regex =
    if (!value.email) error.email = "email address is requried ";
    // if (!value.email.test()) error.email = "enter correct email ";
    if (!value.subject) error.subject = "subject address is requried ";
    if (!value.help) error.help = "area cannot be empty ";
    return error;
  };

  const formSubmit = (e) => {
    e.preventDefault();
    seterrorMessage(validation(inputValues));
    setInputValues({
      email: "",
      subject: "",
      help: "",
    });
    console.log(inputValues);
  };
  return (
    <div>
      <div className="contact-heading">
        <main>
          <h2>Contact Us</h2>
          <br />
          <p>Questions, enquireies , feedback - we are here for it all</p>
        </main>
      </div>
      <main>
        <form className="contact-form" onSubmit={formSubmit}>
          <div className="inputgroup">
            <label>Your email address</label>
            <input
              autoFocus
              type="email"
              name="email"
              placeholder="abc@123.com"
              value={inputValues.email}
              onChange={(e) =>
                setInputValues({ ...inputValues, email: e.target.value })
              }
            />
            <small>{errorMessage.email}</small>
          </div>
          <div className="inputgroup">
            <label>Subject</label>

            <input
              type="text"
              name="subject"
              value={inputValues.subject}
              onChange={(e) =>
                setInputValues({ ...inputValues, subject: e.target.value })
              }
            />
            <small>{errorMessage.subject}</small>
          </div>
          <div className="inputgroup">
            <label>How can we help?</label>

            <textarea
              rows={5}
              type="text"
              name="help"
              value={inputValues.help}
              onChange={(e) =>
                setInputValues({ ...inputValues, help: e.target.value })
              }
            />
            <small>{errorMessage.help}</small>
          </div>
          <br />
          <button className="contact-btn" type="submit">
            submit form
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
