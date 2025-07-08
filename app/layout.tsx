import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import JellyFish from "./components/jellyFish";

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
        {/* {positions.map((pos, i) => (
          <div
            key={i}
            className="absolute z-0 pointer-events-none animate-jelly overflow-hidden"
            style={{
              top: pos.top,
              left: pos.left,
              opacity: pos.opacity,
              scale: pos.scale,
              mixBlendMode: "screen",
              filter: "blur(1px)",
              willChange: "transform, opacity",
              animationDelay: `${i * 3}s`,
              animationDuration: `${12 + i * 2}s`,
            }}
          >
            <JellyFish />
          </div>
        ))} */}
        {children}
      </body>
    </html>
  );
}
