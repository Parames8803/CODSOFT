import React, { useEffect } from "react";
import AOS from "aos";
import contactGif from "../assets/gif/contact.gif";
import "../styles/Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const btnHello = () => {
    window.location.href = "mailto:parameswaran8803@gmail.com";
  };
  return (
    <div className="contact" id="5" data-aos="zoom-in" data-aos-duration="1500">
      <div className="content">
        <div className="title">
          <span>05. </span>Contact{"/>"}
        </div>
        <div className="desc">
          <h1 className="intro">GET IN TOUCH</h1>
          <p>
            Seeking <span>collaboration</span> or have a question? I'm all ears!
            Be it a potential project, a brilliant idea, or just a friendly
            hello, I'm excited to hear from you.
          </p>
          <button className="hello" onClick={btnHello}>
            Say hello
          </button>
          <div className="social">
            <a href="https://www.linkedin.com/in/parameswaran-eswaran">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=9952213571">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="gif">
        <img src={contactGif} width={550} height={550} />
      </div>
    </div>
  );
};

export default Contact;
