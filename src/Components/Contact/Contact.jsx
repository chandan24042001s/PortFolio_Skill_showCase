import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
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
      <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <div className="column left">
              <div className="text">Reach Out to me!</div>
              <p>
                Discuss a Project or just want to say Hi? My inbox is open for
                all.
              </p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Chandan Kumal</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Gurgaon, Delhi</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope email-icon"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="text1">Stay Connected</div>
              <div>
                <div className="wrapper">
                  <div className="button1">
                    <div className="icon">
                      <a
                        href="https://www.linkedin.com/in/chandan-kumal777/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin" id="icons"></i>{" "}
                      </a>
                    </div>
                    <a href="https://www.linkedin.com/in/chandan-kumal777/">
                      <span className="icon-text">LinkedIn</span>
                    </a>
                  </div>
                  <div className="buttonmob">
                    <div className="button1">
                      <div className="icon">
                        <a
                          href="https://twitter.com/oscar_harry_sir"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" id="icons"></i>
                        </a>
                      </div>
                      <a href="https://twitter.com/oscar_harry_sir">
                        <span className="icon-text">Twitter </span>
                      </a>
                    </div>
                  </div>
                  <div className="buttonmob1"></div>
                  <div className="button1">
                    <div className="icon">
                      <a
                        href="https://github.com/chandan24042001s?tab=repositories"
                        target="_blank"
                      >
                        <i className="fab fa-github" id="icons"></i>
                      </a>
                    </div>
                    <a href="https://github.com/chandan24042001s?tab=repositories">
                      <span className="icon-text">Github </span>
                    </a>
                  </div>
                </div>

              
              </div>
            </div>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
