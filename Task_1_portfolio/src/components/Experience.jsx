import React, { useEffect, useState } from "react";
import AOS from "aos";
import "../styles/Experience.css";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, [200]);
  const [activeTab, setActiveTab] = useState("internship");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="experience" id="3" data-aos="zoom-in" data-aos-duration="1500">
      <div className="title"><span>03. </span>Experience{"/>"}</div>
      <div className="buttons">
        <button
          className={activeTab === "internship" ? "active" : ""}
          onClick={() => handleTabClick("internship")}
        >
          Internship
        </button>
        <button
          className={activeTab === "freelance" ? "active" : ""}
          onClick={() => handleTabClick("freelance")}
        >
          Freelancing
        </button>
        <button
          className={activeTab === "project" ? "active" : ""}
          onClick={() => handleTabClick("project")}
        >
          Project Expo
        </button>
      </div>
      <div className="content" style={{ opacity: activeTab ? 1 : 0 }}>
        <div
          className={`tab-content ${
            activeTab === "internship" ? "active" : ""
          }`}
        >
          <div className="card">
            <div className="title">
              Full Stack Developer<span> @Freelancer's League</span>
            </div>
            <div className="timeline">Mar 2023 - Oct 2023</div>
            <div className="desc">
              <li>
                Have a Good Experience in that, Although I had learned and
                expertise in many Technologies through the Internship.
              </li>
              <li>
                {" "}
                As a Part of an Internship i trained myself to finish the
                products on deadline and many industry level frameworks and file
                Structures.
              </li>
            </div>
          </div>
        </div>
        <div
          className={`tab-content ${activeTab === "freelance" ? "active" : ""}`}
        >
          <div className="card">
            <div className="title">
              Freelancing Projects<span> @onMyOwn</span>
            </div>
            <div className="timeline">Mar 2022 - Now</div>
            <div className="desc">
              <li>
                Developed the Plant Disease Finder through the website using
                REST Api's.
              </li>
              <li>Design a E-commerce Website for a Startup Corp.</li>
              <li>
                Build the Powerful Authentication Module for a SAAS Product.
              </li>
            </div>
          </div>
        </div>
        <div
          className={`tab-content ${activeTab === "project" ? "active" : ""}`}
        >
          <div className="card">
            <div className="title">
              Winning Moment<span> @ProjectExpo</span>
            </div>
            <div className="timeline">Nov 2023</div>
            <div className="desc">
              <li>
                We and Team developed the Application with Some Ai Engines that
                gets the Url and Summarize it. We Got Second Prize For our
                Project which is held in SNS institutions.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
