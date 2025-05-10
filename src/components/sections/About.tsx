import React, { type FC } from "react";
import "./About.css";

type AboutProps = {
  title: string;
  desc: string;
};

const About: FC<AboutProps> = ({ title, desc }) => {
  return (
    <div className="darkBg">
      <section id="about" className="about">
        <div className="headerInfo">
          <h1 className="font40 bold whiteColor">{title}</h1>
          <div
            className="whiteColor"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
      </section>
    </div>
  );
};
export default About;
