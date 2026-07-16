import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import { BootSequence } from "./components/boot-sequence";
import { BrainMap } from "./components/brain-map";
import { ProjectCard } from "./components/project-card";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import {
	experience,
	facts,
	featuredProjectSlugs,
} from "./portfolio-data";

const tickerItems = [
	"ENGINEERING",
	"PLAY",
	"PRODUCT THINKING",
];

function TickerGroup({ hidden = false }: { hidden?: boolean }) {
	return (
		<div className="ticker-group" aria-hidden={ hidden || undefined }>
			{ [0, 1].flatMap((cycle) =>
				tickerItems.map((item) => (
					<span className="ticker-item" key={ `${cycle}-${item}` }>
						<span>{ item }</span>
						<i aria-hidden="true">✦</i>
					</span>
				)),
			) }
		</div>
	);
}

export default function Home() {
	const featuredProjects = featuredProjectSlugs
		.map((slug) => allProjects.find((project) => project.slug === slug))
		.filter((project): project is (typeof allProjects)[number] => Boolean(project));

	return (
		<>
			<BootSequence />
			<SiteHeader />
			<main>
				<section className="brain-gate-hero" id="top">
					<div className="brain-gate-headline reveal-up">
						<p>FELICIA FEL&apos;S INTERNAL OPERATING SYSTEM</p>
						<h1>Welcome to my brain</h1>
						<span>
							(no crawlers, no bots, no LLMs beyond this point — kidding, you got in somehow)
						</span>
					</div>
					<BrainMap />
				</section>

				<div className="ticker" aria-label="Felicia's disciplines">
					<div className="ticker-track">
						<TickerGroup />
						<TickerGroup hidden />
					</div>
				</div>

				<section className="work-section page-shell" id="selected-work">
					<div className="section-heading">
						<div>
							<p className="kicker">01 / SELECTED EVIDENCE</p>
							<h2>Work that escaped the sketchbook.</h2>
						</div>
						<p>
							A mix of production platforms, client campaigns, and self-initiated
							experiments. Every case file contains the actual decisions and details.
						</p>
					</div>
					<div className="featured-projects">
						{ featuredProjects.map((project, index) => (
							<ProjectCard project={ project } priority={ index < 2 } key={ project.slug } />
						)) }
					</div>
					<div className="section-cta">
						<Link className="primary-button secondary-button" href="/projects">
							Open all 11 case files <span aria-hidden="true">↗</span>
						</Link>
					</div>
				</section>

				<section className="about-strip">
					<div className="page-shell about-grid">
						<div className="about-portrait">
							<div className="portrait-card">
								<img src="/favicon.png" alt="Illustrated portrait of Felicia Fel" />
								<p>Actual human, allegedly.</p>
							</div>
							<span className="portrait-arrow" aria-hidden="true">↗</span>
						</div>
						<div className="about-copy">
							<p className="kicker">02 / THE PERSON IN THE MACHINE</p>
							<h2>Full-stack engineer. Product-minded. Design-informed.</h2>
							<div className="about-columns">
								<p>
									My route into software was not a straight line. It ran through 3D
									animation, VFX, visual design, UX, frontend engineering, and now
									full-stack product development.
								</p>
								<p>
									That crossover is the point: I can move between the system and the
									surface, care about the deployment and the delightful detail, and
									translate between design and engineering without losing the idea.
								</p>
							</div>
							<Link className="scribble-link dark" href="/about">
								Read the full backstory <span aria-hidden="true">↗</span>
							</Link>
						</div>
					</div>
				</section>

				<section className="facts-section page-shell">
					<div className="section-heading compact">
						<div>
							<p className="kicker">03 / NOTES FROM THE MARGINS</p>
							<h2>Six facts, zero filler.</h2>
						</div>
						<p>Verified from the work, the history, or the person herself.</p>
					</div>
					<div className="fact-grid">
						{ facts.map((fact) => (
							<article key={ fact.marker }>
								<span>{ fact.marker }</span>
								<h3>{ fact.title }</h3>
								<p>{ fact.text }</p>
							</article>
						)) }
					</div>
				</section>

				<section className="timeline-section page-shell">
					<div className="section-heading compact">
						<div>
							<p className="kicker">04 / RECENT TRANSMISSIONS</p>
							<h2>The plot so far.</h2>
						</div>
					</div>
					<div className="timeline">
						{ experience.map((item) => (
							<article key={ item.company }>
								<time>{ item.period }</time>
								<div>
									<h3>{ item.company }</h3>
									<p>{ item.role }</p>
								</div>
								<p>{ item.detail }</p>
							</article>
						)) }
					</div>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
