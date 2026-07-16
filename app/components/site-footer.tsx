import Link from "next/link";

export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div>
				<p className="kicker">END OF FILE / BEGINNING OF CONVERSATION</p>
				<h2>Have something strange, useful, or ambitious in mind?</h2>
			</div>
			<a className="scribble-link" href="mailto:feliu.ren@gmail.com">
				Let&apos;s make it real <span aria-hidden="true">↗</span>
			</a>
			<div className="footer-meta">
				<span>Felicia Fel · Auckland, NZ</span>
				<div>
					<a href="https://github.com/applescan" target="_blank" rel="noreferrer">
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/felicia-fel/"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</a>
					<Link href="/projects">Project archive</Link>
				</div>
				<span>Built by hand, powered by curiosity.</span>
			</div>
		</footer>
	);
}
