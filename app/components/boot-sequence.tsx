"use client";

import { useEffect, useState } from "react";

const bootLines = [
	"loading visual instincts ............... ready",
	"compiling production code .............. ready",
	"mounting curiosity drive ................ ready",
	"checking boring portfolio templates ..... rejected",
];

export function BootSequence() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (window.sessionStorage.getItem("felicia-portfolio-booted")) return;

		setVisible(true);
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") skip();
		};
		window.addEventListener("keydown", handleEscape);
		const timeout = window.setTimeout(() => {
			window.sessionStorage.setItem("felicia-portfolio-booted", "true");
			setVisible(false);
		}, 3200);

		return () => {
			window.clearTimeout(timeout);
			window.removeEventListener("keydown", handleEscape);
		};
	}, []);

	function skip() {
		window.sessionStorage.setItem("felicia-portfolio-booted", "true");
		setVisible(false);
	}

	if (!visible) return null;

	return (
		<div className="boot-screen" role="dialog" aria-modal="true" aria-label="Portfolio loading sequence">
			<div className="boot-terminal">
				<p>FELICIA_OS v26.07</p>
				<div className="boot-lines">
					{ bootLines.map((line, index) => (
						<p key={ line } style={ { animationDelay: `${index * 0.48}s` } }>
							<span aria-hidden="true">&gt;</span> { line }
						</p>
					)) }
				</div>
				<p className="boot-welcome">Entering the brain dump...</p>
				<button type="button" onClick={ skip }>
					Skip intro [ESC]
				</button>
			</div>
		</div>
	);
}
