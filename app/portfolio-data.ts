export const featuredProjectSlugs = [
	"tokyo-game-show-2025",
	"whazup",
	"mi-casa",
	"sarana",
] as const;

export const projectDetails: Record<
	string,
	{ code: string; category: string; tags: string[]; accent: string }
> = {
	"tokyo-game-show-2025": {
		code: "CASE 01",
		category: "Interactive campaign",
		tags: ["Angular", "PixiJS", "Google Play"],
		accent: "red",
	},
	whazup: {
		code: "CASE 02",
		category: "Product experiment",
		tags: ["Next.js", "TypeScript", "Motion"],
		accent: "blue",
	},
	"mi-casa": {
		code: "CASE 03",
		category: "Playable web experience",
		tags: ["React", "Mini-games", "Creative code"],
		accent: "yellow",
	},
	sarana: {
		code: "CASE 04",
		category: "Family business tool",
		tags: ["Dashboard", "Bilingual UX", "POS"],
		accent: "green",
	},
	"diamond-valley": {
		code: "CASE 05",
		category: "Regional campaign",
		tags: ["Angular", "PixiJS", "Localisation"],
		accent: "blue",
	},
	"tokyo-game-show": {
		code: "CASE 06",
		category: "Interactive campaign",
		tags: ["Mini-game", "Event web", "Google Play"],
		accent: "red",
	},
	appreciateya: {
		code: "CASE 07",
		category: "Full-stack product",
		tags: ["Next.js", "Team culture", "AI"],
		accent: "green",
	},
	"what-to-eat": {
		code: "CASE 08",
		category: "Side project",
		tags: ["T3 Stack", "Food waste", "API"],
		accent: "yellow",
	},
	"nz-locum": {
		code: "CASE 09",
		category: "Capstone product",
		tags: ["React", "Node.js", "Marketplace"],
		accent: "green",
	},
	hikitia: {
		code: "CASE 10",
		category: "UX case study",
		tags: ["Research", "Testing", "Figma"],
		accent: "blue",
	},
	"mixtape-me": {
		code: "CASE 11",
		category: "Nostalgic web app",
		tags: ["Spotify API", "React", "Sharing"],
		accent: "red",
	},
};

export const facts = [
	{
		marker: "01",
		title: "Design x Engineering",
		text: "I am a full-stack software engineer with a prior career in visual design.",
	},
	{
		marker: "02",
		title: "My first render was 3D",
		text: "I studied 3D animation and VFX, which explains the instinct to make websites feel like places.",
	},
	{
		marker: "03",
		title: "I build for real life",
		text: "Sarana is a bilingual POS and dashboard made for my family's shop in Indonesia.",
	},
	{
		marker: "04",
		title: "Play is serious research",
		text: "Mi Casa turns a virtual tour of my home into eight mini-games with leaderboard challenges.",
	},
	{
		marker: "05",
		title: "Away from the screen",
		text: "You will usually find me dancing, at the gym or heading outdoors for an adventure.",
	},
	{
		marker: "06",
		title: "Located down here",
		text: "I am a creative full-stack engineer based in Auckland, Aotearoa New Zealand.",
	},
];

export const experience = [
	{
		period: "2025 - NOW",
		company: "Youdooh",
		role: "Full Stack Engineer",
		detail: "Cloud-native DOOH product development across Nuxt, Vue, Node.js, Express, PostgreSQL, testing, and CI/CD.",
	},
	{
		period: "2024 - 2025",
		company: "PHQ",
		role: "Intermediate Developer",
		detail: "Interactive Google campaigns and playable experiences built with Angular, PixiJS, and Material UI.",
	},
	{
		period: "2023 - 2024",
		company: "Generate Zero",
		role: "Frontend Engineer",
		detail: "Led dashboard UX for a carbon emissions platform serving clients including Westpac and Kiwibank.",
	},
	{
		period: "2019 - 2022",
		company: "Deltapath",
		role: "Visual Designer to Senior Visual Designer",
		detail: "Product UI/UX, websites, motion, video, social content, branding, and identity design.",
	},
];

export const education = [
	"Disruptive Technologies Micro-credential (NZQA Level 8) - AcademyEX, Oct 2023",
	"Certificate in Software Engineering - AUT x Institute of Data, Jan 2023",
	"Professional Diploma in UX Design (with Glasgow Caledonian University) - UX Design Institute, Dec 2022",
	"Certificate in Intermediate Software Development, Level 5 - Future Skills Academy, Sep 2022",
	"Bachelor of Art and Design in 3D Animation & VFX - Media Design School, 2018",
];

export const capabilities = [
	"Full-stack product engineering",
	"Creative development",
	"Interactive campaigns",
	"Backend systems & APIs",
	"Testing, CI/CD & cloud delivery",
];
