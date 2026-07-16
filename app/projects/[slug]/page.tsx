import type { Metadata } from "next";
import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/app/components/mdx";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { Header } from "./header";

type Props = { params: { slug: string } };

export function generateStaticParams(): Props["params"][] {
	return allProjects.filter((project) => project.published).map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
	const project = allProjects.find((item) => item.slug === params.slug);
	if (!project) return {};

	return {
		title: project.title,
		description: project.description,
		openGraph: project.thumbnail ? { images: [project.thumbnail] } : undefined,
	};
}

export default function ProjectPage({ params }: Props) {
	const project = allProjects.find((item) => item.slug === params.slug && item.published);
	if (!project) notFound();

	return (
		<>
			<SiteHeader />
			<main className="case-page">
				<Header project={project} />
				<article className="case-body">
					<Mdx code={project.body.code} />
				</article>
			</main>
			<SiteFooter />
		</>
	);
}
