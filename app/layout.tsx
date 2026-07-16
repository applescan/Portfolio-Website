import type { Metadata } from "next";
import localFont from "next/font/local";
import "../global.css";
import { Analytics } from "./components/analytics";

const calSans = localFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-display",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://felicia-portfolio.netlify.app"),
	title: {
		default: "Felicia Fel · Full-Stack Software Engineer",
		template: "%s · Felicia Fel",
	},
	description:
		"Portfolio of Felicia Fel, an Auckland-based full-stack software engineer building production web products, platforms, and interactive experiences.",
	openGraph: {
		title: "Felicia Fel · Full-Stack Software Engineer",
		description:
			"Full-stack product engineering across frontend architecture, backend systems, data, testing, and production delivery.",
		url: "/",
		siteName: "Felicia Fel",
		images: [{ url: "/img/whazup/whazup.png", width: 1200, height: 628 }],
		locale: "en_NZ",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Felicia Fel · Full-Stack Software Engineer",
		description: "Production web products, platforms, and interactive engineering.",
		images: ["/img/whazup/whazup.png"],
	},
	robots: { index: true, follow: true },
	icons: { icon: "/favicon.png", apple: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={calSans.variable}>
			<body>
				<Analytics />
				{children}
			</body>
		</html>
	);
}
