import React, { type FC } from "react";
import "./ProjectBox.css";

type ProjectBoxProps = {
  img: string;
  title: string;
  text: string;
  link: string;
};

const ProjectBox: FC<ProjectBoxProps> = ({ img, title, text, link }) => {
  return (
    <div className="projectBox">
      <a className="img-btn animate pointer" href={link}>
        <img className="radius8" src={img} alt="project" />
      </a>
      <h3 className="font20 bold">{title}</h3>
      <p className="font13">{text}</p>
    </div>
  );
};

export default ProjectBox;
