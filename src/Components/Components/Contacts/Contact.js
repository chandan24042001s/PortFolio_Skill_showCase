import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f7cccgb",
        "template_ylk2daq",
        form.current,
        "x-sPYIhWNcXGSJk43"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          form.current.reset();
          setDone(true);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user1" placeholder="Message" />

          <div class="g-recaptcha" data-sitekey="VrlQIrHu1D5Np_6PLYSjt"></div>

          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
        </form>
          <div
            className="blur c-blur1" 
            style={{ background: "var(--purple)" }}
          ></div>
      </div>
    </div>
  );
};

export default Contact;
