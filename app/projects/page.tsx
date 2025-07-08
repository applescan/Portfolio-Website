import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;

export default async function ProjectsPage() {
  const top1 = allProjects.find((project) => project.slug === "mi-casa")!;
  const top2 = allProjects.find((project) => project.slug === "sarana")!;
  const top3 = allProjects.find((project) => project.slug === "appreciateya")!;

  const others = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== top1.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  const topProjects = [top1, top2, top3];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* TOP 3 PROJECTS */}
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {topProjects.map((project) => (
            <Card key={project.slug}>
              <Article project={project} />
            </Card>
          ))}
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        {/* OTHER PROJECTS */}
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {others
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {others
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {others
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
