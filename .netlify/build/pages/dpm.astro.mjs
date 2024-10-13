import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D07P6R4w.mjs';
import 'kleur/colors';
import 'html-escaper';
import { T as Title, I as Images, L as List, B as Body } from '../chunks/List_rWYf4iXP.mjs';
import { B as Button, $ as $$Layout } from '../chunks/Layout_7yXHhCp-.mjs';
export { renderers } from '../renderers.mjs';

const $$Dpm = createComponent(($$result, $$props, $$slots) => {
  const projectInfo = {
    title: "Deltapath Mobile UI & UX Design",
    desc: [
      "Deltapath Mobile is a cutting-edge mobile app that can handle all of your daily business communication needs. Users of Deltapath Mobile are able to adapt to any situation at any time and place while keeping high fidelity, excellent audio quality, instant messaging, access to conference calls on the fly, and much more.",
      "The project involved user experience research, strategy development for redesigning the next iteration, and prototyping the app's user interface. The business aims to modernize its UI and UX from the previous 2018 version."
    ],
    skills: "UX & UI Design",
    year: "2022"
  };
  const sectionTitles = {
    problems: "Problems:",
    deltpathRequirements: "Deltapath Mobile Requirements:",
    proposedSolution: "Proposed Solution:",
    results: "Results:"
  };
  const sectionDescriptions = {
    solution: "Deltapath Mobile users' needs vary by industry, which helps in sales but creates challenges in designing the mobile app.",
    results: "The team is excited about the proposed new homepage and user experience, although the project is still in development. The proposed solutions are currently being evaluated and worked on. I've designed the UX flow for the homepage and login screen so far."
  };
  const problemItems = [
    "Other apps often have one primary feature that serves as the focal point of the app.",
    "When fewer features are available, other businesses usually create separate apps rather than merging all features into one.",
    "Typically, all of the functionality can be arranged on the bottom screen's tabs."
  ];
  const deltpathRequirementsItems = [
    "Each user relies on different key features, so the app needs to ensure that everyone enjoys using their specific features.",
    "The UI must group additional features so that the interface is not cluttered or overwhelming.",
    "Not all functionality can fit on the bottom screen tabs."
  ];
  const solutionItems = [
    "During installation, users can select features to have shortcuts on their home screens, making it easier to access their primary tasks.",
    "The home screen should be simple to avoid information overload.",
    "A side menu will provide access to other features. While many apps use a bottom tab, Deltapath's complex structure benefits from a side menu for better user experience.",
    "Upon restarting the app after closing it, the user will return to the home screen.",
    "If users exit without terminating the app, it will reopen to the last page or activity."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Deltapath Mobile UI & UX Design" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="whiteBg"> <div class="container"> <div class="header-info"> ${renderComponent($$result2, "Title", Title, { "title": projectInfo.title, "subtitle": "", "descriptions": projectInfo.desc, "skills": projectInfo.skills, "year": projectInfo.year })} </div> ${renderComponent($$result2, "Images", Images, { "images": [
    { src: "/img/dpm/dpm1.webp", alt: "project image cover" },
    { src: "/img/dpm/dpm2.webp", alt: "project image cover" },
    { src: "/img/dpm/dpm3.webp", alt: "project image cover" }
  ] })} ${renderComponent($$result2, "List", List, { "title": sectionTitles.problems, "items": problemItems })} ${renderComponent($$result2, "List", List, { "title": sectionTitles.deltpathRequirements, "items": deltpathRequirementsItems })} ${renderComponent($$result2, "List", List, { "title": sectionTitles.proposedSolution, "desc": sectionDescriptions.solution, "items": solutionItems })} ${renderComponent($$result2, "Images", Images, { "images": [
    { src: "/img/dpm/concept1.webp", alt: "Image 1" },
    { src: "/img/dpm/concept2.webp", alt: "Image 2" },
    { src: "/img/dpm/concept3.webp", alt: "Image 3" }
  ] })} ${renderComponent($$result2, "Body", Body, { "title": sectionTitles.results, "desc": sectionDescriptions.results })} ${renderComponent($$result2, "Images", Images, { "images": [
    { src: "/img/dpm/1.webp", alt: "Image 1" },
    { src: "/img/dpm/2.webp", alt: "Image 2" },
    { src: "/img/dpm/3.webp", alt: "Image 3" },
    { src: "/img/dpm/4.webp", alt: "Image 4" },
    { src: "/img/dpm/5.webp", alt: "Image 5" }
  ] })} <div style="width: 150px; padding-top: 100px;"> <a href="/#projects"> ${renderComponent($$result2, "Button", Button, { "title": "Back", "border": false })} </a> </div> </div> </section> ` })}`;
}, "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/dpm.astro", void 0);

const $$file = "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/dpm.astro";
const $$url = "/dpm";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dpm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
