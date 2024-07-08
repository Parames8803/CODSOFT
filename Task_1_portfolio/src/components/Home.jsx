import AOS from "aos";
import React, { useEffect } from "react";
import userHome from "../assets/images/new1.png";
import "../styles/Home.css";
import About from "../components/About"
import Experience from "../components/Experience"
import Work from "../components/Work"
import Contact from "../components/Contact"

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const btnResume = () => {
    window.open("/MyResume.pdf", "_blank");
  };
  return (
    <>
    <div className="home" id="1" data-aos="zoom-in" data-aos-duration="1500">
      <div className="content">
        <div className="title">
          <span>01. </span>Home{"/>"}
        </div>
        <div className="intro">
          Hi , I am
          <br />
          <span>PARAMESWARAN</span>
          <br />i <i>design</i> and Develop Websites
        </div>
        <div className="desc">
          An <span>MERN stack developer</span> with a talent for crafting
          captivating web applications. Collaborative and detail-oriented,
          brings a result-driven approach to every project.
        </div>
        <button className="connect" onClick={btnResume}>
          {"Resume"}
        </button>
      </div>
    </div>
    <About/>
    <Experience/>
    <Work/>
    <Contact/>
    </>
  );
};

export default Home;
