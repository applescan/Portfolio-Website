import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { projectDetails } from "../../portfolio-data";

export function Header({ project }: { project: Project }) {
	const details = projectDetails[project.slug];
	const links = [
		project.url ? { label: "Visit live project", href: project.url } : null,
		project.repository
			? {
					label: "View source",
					href: `https://github.com/${project.repository.replace(/^\//, "")}`,
				}
			: null,
	].filter((link): link is { label: string; href: string } => Boolean(link));

	return (
		<header className={`case-hero accent-${details?.accent ?? "blue"}`}>
			<div className="page-shell">
				<Link className="case-back" href="/projects">
					<span aria-hidden="true">←</span> Back to the evidence room
				</Link>
				<div className="case-heading-grid">
					<div>
						<p className="kicker">
							{details?.code ?? "CASE FILE"} / {details?.category ?? "PROJECT"}
						</p>
						<h1>{project.title}</h1>
					</div>
					<div className="case-summary">
						<p>{project.description}</p>
						<div className="case-tags">
							{details?.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
						</div>
						<div className="case-links">
							{links.map((link) => (
								<a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
									{link.label} <span aria-hidden="true">↗</span>
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="case-file-meta">
					<span>FILE: {project.slug.toUpperCase()}</span>
					<span>YEAR: {project.date ? new Date(project.date).getFullYear() : "ONGOING"}</span>
					<span>STATUS: SHIPPED</span>
				</div>
			</div>
		</header>
	);
}
