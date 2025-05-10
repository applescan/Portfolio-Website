import React from "react";
import Card from "../elements/Card";
import "./Experience.css";

interface ExperienceItem {
  title: string;
  text: string;
  list: string[];
}

interface ExperienceProps {
  experienceItems: ExperienceItem[];
  educationItems: ExperienceItem[];
}

export default function Experience({
  experienceItems,
  educationItems,
}: ExperienceProps) {
  return (
    <div className="darkBg">
      <section id="resume" className="experience-wrapper">
        <div className="header-info">
          <h1 className="font40 bold whiteColor">Resume</h1>
          <p className="font25 whiteColor">Work Experience</p>
        </div>

        <div className="tables-wrapper">
          {experienceItems.map((item, index) => (
            <div className="table-box-large" key={index}>
              <Card title={item.title} text={item.text} list={item.list} />
            </div>
          ))}
        </div>

        <div className="spacer"></div>
        <div className="header-info">
          <p className="font25 whiteColor">Education</p>
        </div>

        <div className="tables-wrapper">
          {educationItems.map((item, index) => (
            <div className="table-box" key={index}>
              <Card title={item.title} text={item.text} list={item.list} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
