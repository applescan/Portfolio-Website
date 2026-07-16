import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { projectDetails } from "../portfolio-data";

type ProjectCardProps = {
	project: Project;
	priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
	const details = projectDetails[project.slug] ?? {
		code: "CASE FILE",
		category: "Digital product",
		tags: [],
		accent: "blue",
	};
	const projectYear = project.date ? new Date(project.date).getFullYear() : "Ongoing";

	return (
		<Link
			className={`project-card accent-${details.accent}`}
			href={`/projects/${project.slug}`}
		>
			<article>
				<div className="project-card-image">
					{project.thumbnail ? (
						<img
							src={project.thumbnail}
							alt=""
							loading={priority ? "eager" : "lazy"}
						/>
					) : null}
					<span className="case-stamp">{details.code}</span>
					<span className="open-stamp">Open file ↗</span>
				</div>
				<div className="project-card-copy">
					<div className="project-meta">
						<span>{details.category}</span>
						<time dateTime={project.date}>{projectYear}</time>
					</div>
					<h2>{project.title}</h2>
					<p>{project.description}</p>
					<ul aria-label="Technologies and themes">
						{details.tags.map((tag) => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
				</div>
			</article>
		</Link>
	);
}
