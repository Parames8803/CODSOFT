import React, { useEffect } from "react";
import AOS from "aos";
import "../styles/About.css";
import blog from "../assets/images/blog.png";
import course from "../assets/images/course.png";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about" id="2" data-aos="zoom-in" data-aos-duration="1500">
      <div className="title">
        <span>02. </span>About{"/>"}
      </div>
      <div className="content">
        <div className="line">
          <span className="lineNo">01</span>
          <p className="code">
            <span className="keyWord">{"class"}</span>
            {" Parameswaran"}
            <span className="brackets">{"{"}</span>
          </p>
        </div>
        <div className="line">
          <span className="lineNo">02</span>
          <p className="code">
            <span className="comments">{"// I can, Because I did."}</span>
          </p>
        </div>
        <div className="line">
          <span className="lineNo">03</span>
          <p className="code">
            <span className="keyWord">{"constructor( )"}</span>
            <span className="brackets">{"{"}</span>
          </p>
        </div>
        <div className="line">
          <span className="lineNo">04</span>
          <p className="code">
            <span className="keyWord">{"this."}</span>
            {"name = 'Parameswaran'"}
          </p>
        </div>
        <div className="line">
          <span className="lineNo">05</span>
          <p className="code">
            <span className="keyWord">{"this."}</span>
            {"dayOfBirthTimeStamp = 1060309074"}
          </p>
        </div>
        <div className="line">
          <span className="lineNo">06</span>
          <p className="code">
            <span className="keyWord">{"this."}</span>
            {'email = "parameswaran8803@gmail.com"'}
          </p>
        </div>
        <div className="line">
          <span className="lineNo">07</span>
          <p className="code">
            <span className="brackets">{"}"}</span>
          </p>
        </div>
        <div className="line">
          <span className="lineNo">08</span>
          <p className="code">
            <span className="keyWord">{"workExperience( )"}</span>
            <span className="brackets">{"{"}</span>
          </p>
        </div>
        <div className="line">
          <span className="lineNo">09</span>
          <p className="code">
            <span className="keyWord">{"return"}</span>
            <span className="brackets">{"["}</span>
          </p>
        </div>
        <div className="line">
          <span className="lineNo">10</span>
          <p className="code">
            <span className="brackets">{"{"}</span>
            {"'2021 - now' : 'Full Stack Development Training course'"}
            <span className="brackets">{"}"}</span>
            {","}
          </p>
        </div>
        <div className="line">
          <span className="lineNo">11</span>
          <p className="code">
            <span className="brackets">{"{"}</span>
            {"'2023 - now' : 'Full Stack Development Internship'"}
            <span className="brackets">{"}"}</span>
            {","}
          </p>
        </div>
        <div className="line">
          <span className="lineNo">12</span>
          <p className="code">
            <span className="brackets">{"{"}</span>
            {"'2023' : 'Project done for many Freelancing Companies'"}
            <span className="brackets">{"}"}</span>
            {","}
          </p>
        </div>
        <div className="line">
          <span className="lineNo">13</span>
          <p className="code">
            <span className="brackets">{"]"}</span>
          </p>
        </div>
        <div className="line">
          <span className="lineNo">14</span>
          <p className="code">
            <span className="brackets">{"}"}</span>
          </p>
        </div>
        <div className="line">
          <span className="lineNo">15</span>
          <p className="code">
            <span className="keyWord">{"education( )"}</span>
            <span className="brackets">{"{"}</span>
          </p>
        </div>
        <div className="line">
          <span className="lineNo">16</span>
          <p className="code">
            <span className="keyWord">{"return"}</span>
            <span className="brackets">{"["}</span>
          </p>
        </div>
        <div className="line">
          <span className="lineNo">17</span>
          <p className="code">
            <span className="brackets">{"{"}</span>
            {
              "'2020 - 2021' : 'Completed my High School in Computer Science Stream'"
            }
            <span className="brackets">{"}"}</span>
            {","}
          </p>
        </div>
        <div className="line">
          <span className="lineNo">18</span>
          <p className="code">
            <span className="brackets">{"{"}</span>
            {
              "'2020 - 2021' : 'Pursuing my Bachelor's Degree in Computer Science and Engineering'"
            }
            <span className="brackets">{"}"}</span>
            {","}
          </p>
        </div>
        <div className="line">
          <span className="lineNo">19</span>
          <p className="code">
            <span className="brackets">{"]"}</span>
          </p>
        </div>
        <div className="line">
          <span className="lineNo">20</span>
          <p className="code">
            <span className="brackets">{"}"}</span>
          </p>
        </div>
        <div className="line">
          <span className="lineNo">21</span>
          <p className="code">
            <span className="brackets">{"}"}</span>
          </p>
        </div>
      </div>
      <div className="bigContent">
        <div className="desc">
          Learn.<br/>
          Code.<br/>
          Repeat..
        </div>
        <div className="cards">
          <div className="card1">
            <img src={blog} width={280} />
            <div className="detail">
              See my Posts in my Blogs. Which i had come across several
              challenges and obstacles that made me to learn from all failures
            </div>
            <button>
              <a href="https://www.linkedin.com/posts/parameswaran-eswaran_projectexpo-innovation-networking-activity-7135997693272739840-Xga1?utm_source=share&utm_medium=member_desktop">
                View More
              </a>
            </button>
          </div>
          <div className="card2">
            <img src={course} width={280} />
            <div className="detail">
              Through my Learning path I had completed some Mooc Courses to
              Showcase me in digital World.
            </div>
            <button>
              <a href="https://www.linkedin.com/posts/parameswaran-eswaran_javascript-snsinstitutions-snsdesignthinkers-activity-7030584604306640896-aW_8?utm_source=share&utm_medium=member_desktop">
                View More
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
