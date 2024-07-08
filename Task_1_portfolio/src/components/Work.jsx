import React, { useEffect } from "react";
import { FaRegFolder } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { TbListDetails } from "react-icons/tb";
import AOS from "aos";
import "../styles/Work.css";

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="work" id="4" data-aos="zoom-in" data-aos-duration="1500">
      <div className="title"><span>04. </span>Work{"/>"}</div>
      <div className="cards">
        <div className="card" data-aos="flip-left">
          <div className="head">
            <p>
              <FaRegFolder />
            </p>
            <p>
              <a href="https://github.com/Parames8803/E-learning-Website">
                <VscGithub />
              </a>
              <a href="https://github.com/Parames8803/E-learning-Website">
                <TbListDetails />
              </a>
            </p>
          </div>
          <div className="title">Build an E-Learning Website</div>
          <div className="desc">
            An E-learning website with all programming languages tutorials and
            functionalities of online editor and uploading the project files to
            the server, Which is visible to every user and they can download it
            and use it.{" "}
          </div>
          <div className="tools">
            <p>VSCode</p>
            <p>HTML</p>
            <p>SQL</p>
            <p>PHP</p>
          </div>
        </div>
        <div className="card" data-aos="flip-left">
          <div className="head">
            <p>
              <FaRegFolder />
            </p>
            <p>
              <a href="https://github.com/Parames8803/Plantiyum">
                <VscGithub />
              </a>
              <a href="https://github.com/Parames8803/Plantiyum">
                <TbListDetails />
              </a>
            </p>
          </div>
          <div className="title">Plant Disease Finder</div>
          <div className="desc">
            The most occured problems for today youngsters who doing Farming,
            they doesn't Know the diseases of Plant while Seeing, So I build
            this website for them, by finding the disease and giving solution to
            cure it.
          </div>
          <div className="tools">
            <p>React.js</p>
            <p>API</p>
            <p>Node.js</p>
          </div>
        </div>
        <div className="card" data-aos="flip-right">
          <div className="head">
            <p>
              <FaRegFolder />
            </p>
            <p>
              <a href="https://github.com/Parames8803/Authentication-Module">
                <VscGithub />
              </a>
              <a href="https://github.com/Parames8803/Authentication-Module">
                <TbListDetails />
              </a>
            </p>
          </div>
          <div className="title">Authentication Module</div>
          <div className="desc">
            Build the Powerful Authentication Module using OAuth with Secure
            Exception Handling.
          </div>
          <div className="tools">
            <p>React.js</p>
            <p>OAuth2.0</p>
            <p>Node.js</p>
          </div>
        </div>
        <div className="card" data-aos="flip-right">
          <div className="head">
            <p>
              <FaRegFolder />
            </p>
            <p>
              <a href="https://github.com/Parames8803/Prospectss-clone">
                <VscGithub />
              </a>
              <a href="https://github.com/Parames8803/Prospectss-clone">
                <TbListDetails />
              </a>
            </p>
          </div>
          <div className="title">Prospectss Clone Website</div>
          <div className="desc">
            Prospectss is Website that has several tools used for marketing and
            sales purposes. So I had an Idea to build that website with my own.
          </div>
          <div className="tools">
            <p>React.js</p>
            <p>SQL</p>
            <p>Node.js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
