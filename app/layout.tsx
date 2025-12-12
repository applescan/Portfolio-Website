import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import JellyFish from "./components/jellyFish";
import JellyFishSmall from "./components/jellyFishSmall";

export const metadata: Metadata = {
	title: {
		default: "Felicia's Portfolio",
		template: "%s | Felicia's Portfolio",
	},
	description:
		"Creative developer & designer. Explore projects, designs, and more.",
	openGraph: {
		title: "Felicia's Portfolio",
		description:
			"Creative developer & designer. Explore projects, designs, and more.",
		url: "https://felicia-portfolio.netlify.app/",
		siteName: "Felicia's Portfolio",
		images: [
			{
				url: "https://felicia-portfolio.netlify.app/favicon.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Felicia's Portfolio",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

const positions = [
	{ top: "10%", left: "15%", scale: 2, opacity: 0.2 },
	{ top: "30%", left: "55%", scale: 1.6, opacity: 0.15 },
	{ top: "55%", left: "40%", scale: 1.8, opacity: 0.25 },
	{ top: "65%", left: "66%", scale: 1.4, opacity: 0.2 },
	{ top: "75%", left: "0%", scale: 1.7, opacity: 0.1 },
];

const shuffled = [...positions]
	.map((pos) => ({ ...pos, rand: Math.random() }))
	.sort((a, b) => a.rand - b.rand);

const jellyFishSmallIndices = shuffled.slice(0, 3).map((_, i) => i);
const jellyFishIndices = shuffled.slice(3, 5).map((_, i) => i);

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				<div className="absolute left-0 inset-0 overflow-hidden z-0 pointer-events-none">
					{shuffled.map((pos, i) => (
						<div
							key={i}
							className="absolute animate-jelly"
							style={{
								top: pos.top,
								left: pos.left,
								opacity: pos.opacity,
								scale: pos.scale,
								mixBlendMode: "lighten",
								filter: "blur(1px)",
								willChange: "transform, opacity",
								animationDelay: `${i * 3}s`,
								animationDuration: `${12 + i * 2}s`,
							}}
						>
							{jellyFishSmallIndices.includes(i) && <JellyFishSmall />}
							{jellyFishIndices.includes(i) && <JellyFish />}
						</div>
					))}
				</div>
				{children}
			</body>
		</html>
	);
}
