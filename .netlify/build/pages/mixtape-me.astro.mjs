import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D07P6R4w.mjs';
import 'kleur/colors';
import 'html-escaper';
import { T as Title, I as Images, B as Body, L as List } from '../chunks/List_B7R8-9Ls.mjs';
import { B as Button, $ as $$Layout } from '../chunks/Layout_Dvrv0g8i.mjs';
export { renderers } from '../renderers.mjs';

const $$MixtapeMe = createComponent(($$result, $$props, $$slots) => {
  const projectInfo = {
    title: "Mixtape-me | Spotify App Integration",
    subtitle: "Throwback to the 90's with Mixtape-me! Share your top 5 songs in a mixtape form.",
    desc: [
      "In today\u2019s modern era, music is readily available online. You can play whatever you want whenever you want it. In the 90s, before platforms like Spotify were invented, music enthusiasts had to make their way to a record store or a CD store. There\u2019s a sense of nostalgia with heading to a store and flicking through rows of CDs. Driven by post-pandemic angst, retro entertainment options are coming back on trend.",
      "Mixtape-me aims to recreate that experience of walking through the doors of a record store looking at CD covers and store walls with colourful albums, memorabilia, and photos, transferring the same experience into digital form. With Spotify's technology, it's easier than ever to find out who you listen to most all year long, in the last 6 months, or even right now."
    ],
    skills: "Full Stack Web Developer",
    year: "2022"
  };
  const sectionTitles = {
    links: "Links:",
    requirements: "Requirements:",
    builtWith: "Built With:",
    app: "App:",
    userGuide: "User Guide:",
    howItWorks: "How It Works:",
    spotifyDevDashboard: "Spotify Developer Dashboard:",
    results: "Results:"
  };
  const sectionDescriptions = {
    requirements: "For Mixtape-me to work, users must log in and allow the app to access their most-played track data. Mixtape-me is an open-source app developed individually, and by using this app, users agree to the use of their Spotify account username and top 5 track data. Mixtape-me simply displays your top 5 tracks from Spotify and does not store or collect any data.",
    builtWith: "\u2022 Bootstrap \u2022 CSS \u2022 Figma \u2022 GitHub \u2022 Heroku \u2022 HTML \u2022 JavaScript \u2022 Spotify Web API \u2022 Visual Studio Code",
    spotifyDevDashboard: `Spotify has comprehensive Web API documentation. The first step was registering my app with Spotify Developer's account, using their Web API Console for exploring endpoints and accessing metadata. Based on REST principles, Spotify Web API endpoints return JSON metadata about music artists, albums, and tracks from the Spotify Data Catalogue.`,
    results: "On launch day, there was a surge of users signing in and using Mixtape-me. My goal is to reach 100 users! Involving users early in the project provided insights into real-world use cases and improved app design."
  };
  const userGuideItems = [
    "Log in to your Spotify account.",
    "Access your top 5 mixtapes.",
    "Choose from 'Last month', 'Last 6 months', or 'This year' top tracks.",
    "Download mixtape images."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Felicia's Portfolio Website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="whiteBg"> <div class="container"> <div class="header-info"> ${renderComponent($$result2, "Title", Title, { "title": projectInfo.title, "subtitle": projectInfo.subtitle, "descriptions": projectInfo.desc, "skills": projectInfo.skills, "year": projectInfo.year })} </div> ${renderComponent($$result2, "Images", Images, { "images": [
    { src: "/img/mixtape/demo1.jpg", alt: "Mixtape-me Cover" },
    { src: "/img/mixtape/demo2.jpg", alt: "Mixtape-me Cover" }
  ] })} ${renderComponent($$result2, "Body", Body, { "title": sectionTitles.links, "desc": "" })} <div style="display: flex; gap: 20px;"> <a href="https://mixtape-me.herokuapp.com/" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result2, "Button", Button, { "title": "Try the app!", "border": false })} </a> <a href="https://github.com/applescan/Mixtape-me" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result2, "Button", Button, { "title": "View Code", "border": false })} </a> </div> ${renderComponent($$result2, "Body", Body, { "title": sectionTitles.requirements, "desc": sectionDescriptions.requirements })} ${renderComponent($$result2, "Body", Body, { "title": sectionTitles.builtWith, "desc": sectionDescriptions.builtWith })} ${renderComponent($$result2, "Body", Body, { "title": sectionTitles.app, "desc": "" })} <p>Visit <a class="link" href="https://mixtape-me.herokuapp.com" target="_blank" rel="noopener noreferrer">https://mixtape-me.herokuapp.com</a> to access the web application.</p> ${renderComponent($$result2, "List", List, { "title": sectionTitles.userGuide, "items": userGuideItems })} ${renderComponent($$result2, "Body", Body, { "title": sectionTitles.howItWorks, "desc": "" })} <div class="how-it-works"> <p>Mixtape-me is an open-source app that allows you to make mixtapes of your top 5 tracks by logging into Spotify. It sorts your top tracks based on your listening history. Share your mixtapes by saving the image!</p> <br> <b>How are the top tracks determined?</b> <p>Mixtape-me uses your Spotify listening history, with all data provided by Spotify.</p> <b>How to save my mixtape?</b> <p>Click the download button on top of the mixtapes. If the image doesn't download properly, redownload or take a screenshot.</p> <b>The app isn't working.</b> <p>Try clearing cookies or site data for mixtape-me.herokuapp.com, or use a different device.</p> </div> ${renderComponent($$result2, "Body", Body, { "title": sectionTitles.spotifyDevDashboard, "desc": sectionDescriptions.spotifyDevDashboard })} ${renderComponent($$result2, "Images", Images, { "images": [
    { src: "/img/mixtape/stats.jpg", alt: "Stats Image" }
  ] })} ${renderComponent($$result2, "Body", Body, { "title": sectionTitles.results, "desc": sectionDescriptions.results })} <div style="width: 150px; padding-top: 100px;"> <a href="/#projects"> ${renderComponent($$result2, "Button", Button, { "title": "Back", "border": false })} </a> </div> </div> </section> ` })}`;
}, "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/mixtape-me.astro", void 0);

const $$file = "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/mixtape-me.astro";
const $$url = "/mixtape-me";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MixtapeMe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
