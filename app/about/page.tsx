"use client";

import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Briefcase, GraduationCap } from "lucide-react";

export default function AboutPage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen relative pb-16">
			<Navigation />

			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				{/* Header */}
				<div className="flex flex-col md:flex-row items-center gap-10 mb-10">
					<img
						src="/favicon.png"
						alt="Felicia Fel"
						width={160}
						height={160}
						className="rounded-full object-cover border border-zinc-800"
					/>
					<div>
						<h1 className="text-4xl font-bold text-zinc-100 mb-4 text-center md:text-left">
							Hi, I'm Felicia 👋
						</h1>
						<p className="text-zinc-400 leading-relaxed text-center md:text-left">
							I’m a creative developer with a strong foundation in frontend
							engineering and full-stack development. I work with React,
							Next.js, Angular, Vue/Nuxt, Node.js, Express, TypeScript, GraphQL,
							PostgreSQL, Redis, Docker, and GCP, blending technical depth with
							thoughtful design to craft engaging and performant user
							experiences. I’ve worked with startups and global brands like
							Google, where exposure to their engineering standards has shaped
							my focus on clean, scalable, and high-quality code.
						</p>
					</div>
				</div>

				{/* Work & Education Sections */}
				<div className="flex flex-col gap-10">
					<Card>
						<div className="p-6">
							<div className="flex items-center gap-2 mb-4">
								<Briefcase className="text-zinc-100 w-5 h-5" />
								<h2 className="text-xl font-semibold text-zinc-100">
									Work Experience
								</h2>
							</div>
							<ul className="text-zinc-400 space-y-6">
								<li>
									<strong>Youdooh – Full Stack Engineer</strong>
									<br />
									<span className="text-sm"> December 2025 - Current</span>
									<br />
									Built and optimise full-stack features for a cloud-native DOOH
									platform using Nuxt/Vue, TypeScript, Node.js, Express, and
									PostgreSQL.
									<br />
									Working alongside the founders and Lead Engineer to
									prioritise, design, implement, and test new product features.
									<br />
									Manage CI/CD pipelines, automated testing, and code quality
									processes to support a scalable, high-performing platform.
								</li>
								<li>
									<strong>PHQ – Intermediate Developer</strong>
									<br />
									<span className="text-sm">July 2024 – December 2025</span>
									<br />
									Built interactive experiences for Google campaigns including
									Diamond Valley (KR, JP, TW) and Diamond Castle & Diamond
									Spaceship @ Tokyo Game Show using Angular, PixiJS, and
									Material UI.
								</li>
								<li>
									<strong>Generate Zero – Frontend Engineer</strong>
									<br />
									<span className="text-sm">Feb 2023 – Jun 2024</span>
									<br />
									Built MVP for carbon emission platform with Next.js, GraphQL,
									Tailwind, and ShadCN UI. Led dashboard UX and worked with
									clients like Westpac and Kiwibank.
								</li>
								<li>
									<strong>
										Deltapath – Visual Designer → Senior Visual Designer
									</strong>
									<br />
									<span className="text-sm">Oct 2019 – Jun 2022</span>
									<br />
									Website design & development, UI/UX for products, social media
									graphic content, company video editing, branding, and logo
									design.
								</li>
							</ul>
						</div>
					</Card>

					<Card>
						<div className="p-6">
							<div className="flex items-center gap-2 mb-4">
								<GraduationCap className="text-zinc-100 w-5 h-5" />
								<h2 className="text-xl font-semibold text-zinc-100">
									Education
								</h2>
							</div>
							<ul className="text-zinc-400 space-y-6">
								<li>
									<strong>AcademyEX</strong>
									<br />
									Disruptive Technologies Micro-credential (NZQA Level 8)
									<br />
									<span className="text-sm">Oct 2023</span>
								</li>
								<li>
									<strong>AUT x Institute of Data</strong>
									<br />
									Certificate in Software Engineering
									<br />
									<span className="text-sm">Jan 2023</span>
								</li>
								<li>
									<strong>UX Design Institute</strong>
									<br />
									Professional Diploma in UX Design (w/ Glasgow Caledonian
									University)
									<br />
									<span className="text-sm">Dec 2022</span>
								</li>
								<li>
									<strong>Future Skills Academy</strong>
									<br />
									Certificate in Intermediate Software Development, L5
									<br />
									<span className="text-sm">Sept 2022</span>
								</li>
								<li>
									<strong>Media Design School</strong>
									<br />
									Bachelor of Art and Design – 3D Animation & VFX
									<br />
									<span className="text-sm">Graduated 2018</span>
								</li>
							</ul>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
