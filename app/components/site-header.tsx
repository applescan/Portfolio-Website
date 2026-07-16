import Link from "next/link";

const navigation = [
	{ label: "Index", href: "/" },
	{ label: "Work", href: "/projects" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

export function SiteHeader() {
	return (
		<header className="site-header">
			<Link className="wordmark" href="/" aria-label="Felicia Fel, home">
				<span className="wordmark-mark">FF</span>
				<span>Full-stack engineer</span>
			</Link>
			<nav aria-label="Primary navigation">
				{navigation.map((item, index) => (
					<Link href={item.href} key={item.href}>
						<span aria-hidden="true">0{index + 1}</span> {item.label}
					</Link>
				))}
			</nav>
			<a className="availability" href="mailto:feliu.ren@gmail.com">
				<span aria-hidden="true" /> Say hello
			</a>
		</header>
	);
}
