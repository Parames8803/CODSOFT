import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="rights">
        <p>{new Date().getFullYear()}&nbsp;</p>
        <p>&copy;</p>
        <p>copyrights</p>
      </div>
      <a href="https://www.linkedin.com/in/parameswaran-eswaran">
        Build by<span>&#9825;</span>Parameswaran
      </a>
      <a href="/contact" className="contact">
        Say Hello
      </a>
    </div>
  );
};

export default Footer;
