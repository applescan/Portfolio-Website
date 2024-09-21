import React from "react";
import ProjectBox from "../elements/ProjectBox";
import './Projects.css';

interface ProjectItem {
  img: string;
  title: string;
  text: string;
  link: string;
}

interface ProjectsProps {
  projectItems: ProjectItem[];
}

export default function Projects({ projectItems }: ProjectsProps) {
  return (
    <div className="whiteBg">
      <section id="projects" className="project-container">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-grid">
          {projectItems.map((project, index) => (
            <ProjectBox
              key={index}
              img={project.img}
              title={project.title}
              text={project.text}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
