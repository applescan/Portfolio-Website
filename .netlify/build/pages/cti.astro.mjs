import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D07P6R4w.mjs';
import 'kleur/colors';
import 'html-escaper';
import { T as Title, I as Images, B as Body, L as List } from '../chunks/List_B7R8-9Ls.mjs';
import { B as Button, $ as $$Layout } from '../chunks/Layout_Dvrv0g8i.mjs';
export { renderers } from '../renderers.mjs';

const $$Cti = createComponent(($$result, $$props, $$slots) => {
  const projectInfo = {
    title: "Deltapath Salesforce CTI Integration",
    desc: [
      "Initiate calls from your Salesforce on any device you have the application installed and start enjoying audio or video calls from anywhere. Enjoy Salesforce computer telephony integration (CTI).\u200B",
      "Outgoing calls launch the Deltapath Engage or Deltapath Mobile productivity application. Download Deltapath Engage on Windows or macOS or download Deltapath Mobile on iOS or Android."
    ],
    skills: "UX & UI Design",
    year: "2022"
  };
  const sectionTitles = {
    problem: "Problem:",
    process: "Process:",
    results: "Results:"
  };
  const sectionDescriptions = {
    problem: "Before the introduction of Open CTI (Computer Telephony Integration), Salesforce users could only use the features of a CTI system after they installed a CTI adapter program on their machines. These types of programs often included desktop software that required maintenance and didn\u2019t offer the benefits of cloud architecture. After the Open CTI implementation was introduced, it\u2019s now integrated with Salesforce using the Salesforce Call Center.",
    process: "When rolling out all the screens, careful attention was paid so that the colour hierarchies were respected. White space was used generously to keep the layouts uncluttered and to balance out the vibrancy of the icon colours. Using strong and simple geometry and confident typography, we created a quick and effective UI that looks good with the brand guidelines. We used circular forms to create a more welcoming look for the application. The working process can be summarized to:\u200B",
    results: "Although the project is still in development, we have received positive comments thus far from our potential consumers, who appreciate the colourful design and straightforward user interface."
  };
  const processItems = [
    "Work on the software requirements with the product design manager.",
    "Find out what Salesforce agents are in need of and what their pain points are.",
    "I began working on redesigns for particular aspects of the calling experience, such as choosing transfer choices, while I was conducting research."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": projectInfo.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="whiteBg"> <div class="container"> <div class="header-info"> ${renderComponent($$result2, "Title", Title, { "title": projectInfo.title, "subtitle": "", "descriptions": projectInfo.desc, "skills": projectInfo.skills, "year": projectInfo.year })} </div> ${renderComponent($$result2, "Images", Images, { "images": [
    { src: "/img/salesforce/cti1.webp", alt: "project image cover" }
  ] })} ${renderComponent($$result2, "Body", Body, { "title": sectionTitles.problem, "desc": sectionDescriptions.problem })} ${renderComponent($$result2, "List", List, { "title": sectionTitles.process, "desc": sectionDescriptions.process, "items": processItems })} ${renderComponent($$result2, "Body", Body, { "title": sectionTitles.results, "desc": sectionDescriptions.results })} ${renderComponent($$result2, "Images", Images, { "images": [
    { src: "/img/salesforce/1.webp", alt: "Image 1" },
    { src: "/img/salesforce/2.webp", alt: "Image 2" },
    { src: "/img/salesforce/3.webp", alt: "Image 3" },
    { src: "/img/salesforce/5.webp", alt: "Image 5" }
  ] })} <div style="width: 150px; padding-top: 100px;"> <a href="/#projects"> ${renderComponent($$result2, "Button", Button, { "title": "Back", "border": false })} </a> </div> </div> </section> ` })}`;
}, "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/cti.astro", void 0);

const $$file = "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/cti.astro";
const $$url = "/cti";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cti,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
