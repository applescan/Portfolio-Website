import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D07P6R4w.mjs';
import 'kleur/colors';
import 'html-escaper';
import { T as Title, I as Images, L as List, B as Body } from '../chunks/List_B7R8-9Ls.mjs';
import { B as Button, $ as $$Layout } from '../chunks/Layout_BHm4UjZ3.mjs';
export { renderers } from '../renderers.mjs';

const $$Hikitia = createComponent(($$result, $$props, $$slots) => {
  const projectInfo = {
    title: "Hikitia Air UI & UX Design",
    desc1: "During my educational program at The UX Design Institute, I undertook an academic case study focused on perfecting the online airline booking experience. Prioritizing speed, simplicity, and intuition, I crafted a UX design deeply anchored in user-centric principles.",
    desc2: `I took an active role in all facets of the project, from user research to competitive benchmarking, ensuring that every design decision was informed and effective. This wasn't just an exercise in aesthetics; it was a comprehensive journey to understand and cater to our target audience's genuine needs and preferences.`,
    skills: "UX & UI Design",
    year: "2023"
  };
  const competitiveBenchmark = {
    title: "Competitive Benchmark",
    desc: "I conducted a competitive benchmarking analysis, comparing industry leaders and identifying best practices to inform and elevate my design strategy.",
    items: [
      "What strategies are top apps/websites employing successfully in their booking process that I can adopt?",
      "Where are they falling short, offering opportunities for enhancement?",
      "Which recognized standards should I adhere to? (Detailed in the Workflow section)"
    ]
  };
  const usabilityTesting = {
    title: "Usability Testing",
    desc: "I carried out usability testing on existing websites during my UX research to gain a deeper understanding of the real-world user experience\u2014identifying what is working, uncovering pain points, and discerning both the strengths and weaknesses inherent in current design solutions.",
    items: [
      "Often, users look up flights on their phones, yet prefer to complete the purchase on a desktop.",
      "Users often find themselves at a standstill if they can\u2019t view all the necessary information simultaneously on their screen.",
      "Had reservations about the fare prices."
    ]
  };
  const affinityDiagram = {
    title: "Affinity Diagram",
    desc: "After completing the research phase, it was essential to structure the findings. The goal was to streamline the information into primary categories, which would then be utilized in the subsequent Customer Journey.",
    items: [
      "Review competitive benchmarks, surveys, and usability tests and write down any kind of observation on a post-it note.",
      "Organize all observations from the post-it into groups.",
      "Finalize groupings in Miro."
    ]
  };
  const userFlow = {
    title: "User Flow",
    desc: "This user flow\u2019s objective is to fix the issues I have uncovered during my research, which are highlighted in the affinity diagram and customer journey map.",
    items: [
      "Define the high-level booking flow for the new website.",
      "Address all the issues highlighted in your customer journey map.",
      "Lay the groundwork for the prototype."
    ]
  };
  const images = [
    { src: "/img/hikitia/banner1.jpg", alt: "project image cover" },
    { src: "/img/hikitia/banner2.jpg", alt: "mockup image" },
    { src: "/img/hikitia/banner3.jpg", alt: "mockup image" },
    { src: "/img/hikitia/competitiveBenchmark.jpg", alt: "Competitive Benchmark image" },
    { src: "/img/hikitia/usabilityTesting.jpg", alt: "Usability Testing image" },
    { src: "/img/hikitia/affinityDiagram.jpg", alt: "Affinity Diagram image" },
    { src: "/img/hikitia/customerJourney.jpg", alt: "Customer Journey image" },
    { src: "/img/hikitia/userFlow.jpg", alt: "User Flow image" },
    { src: "/img/hikitia/anno1.jpg", alt: "High Fidelity Prototype 1" },
    { src: "/img/hikitia/anno2.jpg", alt: "High Fidelity Prototype 2" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": projectInfo.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="whiteBg"> <div class="container"> ${renderComponent($$result2, "Title", Title, { "title": projectInfo.title, "subtitle": "", "descriptions": [projectInfo.desc1, projectInfo.desc2], "skills": projectInfo.skills, "year": projectInfo.year })} ${renderComponent($$result2, "Images", Images, { "images": [
    { src: images[0].src, alt: images[0].alt },
    { src: images[1].src, alt: images[1].alt },
    { src: images[2].src, alt: images[2].alt }
  ] })} ${renderComponent($$result2, "List", List, { "title": competitiveBenchmark.title, "desc": competitiveBenchmark.desc, "items": competitiveBenchmark.items })} ${renderComponent($$result2, "Images", Images, { "images": [{ src: images[3].src, alt: images[3].alt }] })} <div style="width: 280px; padding-top: 15px;"> <a href="https://drive.google.com/file/d/1O41oy2mXxg4WHdttVp4EIWDrc8L7RDEu/view?usp=sharing" target="_blank"> ${renderComponent($$result2, "Button", Button, { "title": "Download the full research here", "border": false })} </a> </div> ${renderComponent($$result2, "List", List, { "title": usabilityTesting.title, "desc": usabilityTesting.desc, "items": usabilityTesting.items })} ${renderComponent($$result2, "Images", Images, { "images": [{ src: images[4].src, alt: images[4].alt }] })} ${renderComponent($$result2, "List", List, { "title": affinityDiagram.title, "desc": affinityDiagram.desc, "items": affinityDiagram.items })} ${renderComponent($$result2, "Images", Images, { "images": [{ src: images[5].src, alt: images[5].alt }] })} <div style="width: 280px; padding-top: 15px;"> <a href="https://drive.google.com/file/d/1bxbu8jYEQaOKrNkOtWUaDKARAWF5SweO/view?usp=sharing" target="_blank"> ${renderComponent($$result2, "Button", Button, { "title": "Download the affinity diagram here", "border": false })} </a> </div> ${renderComponent($$result2, "Body", Body, { "title": "Customer Journey Map", "desc": "The Customer Journey Map simplified the visualization of the user path. It also aided me in determining which areas of the journey required immediate attention and rectification." })} ${renderComponent($$result2, "Images", Images, { "images": [{ src: images[6].src, alt: images[6].alt }] })} ${renderComponent($$result2, "List", List, { "title": userFlow.title, "desc": userFlow.desc, "items": userFlow.items })} ${renderComponent($$result2, "Images", Images, { "images": [{ src: images[7].src, alt: images[7].alt }] })} <div style="width: 280px; padding-top: 15px;"> <a href="https://drive.google.com/file/d/1hWYWnPCmVyw9EZXdwIdv7S0LjrWvxfky/view?usp=sharing" target="_blank"> ${renderComponent($$result2, "Button", Button, { "title": "Download the user flow here", "border": false })} </a> </div> ${renderComponent($$result2, "Body", Body, { "title": "High Fidelity Prototype with Annotations", "desc": "After exhaustive UX research and assimilating all the insights gathered, I moved forward with crafting a high-fidelity prototype, ensuring it was a true reflection of the user needs and design solutions identified through the research process." })} ${renderComponent($$result2, "Images", Images, { "images": [{ src: images[8].src, alt: images[8].alt }, { src: images[9].src, alt: images[9].alt }] })} <div style="width: 280px; padding-top: 15px;"> <a href="https://drive.google.com/file/d/1WQujyCpGtKgX9nqwViM1nZnIBNMxWmZu/view?usp=sharing" target="_blank"> ${renderComponent($$result2, "Button", Button, { "title": "Download the prototype here", "border": false })} </a> </div> ${renderComponent($$result2, "Body", Body, { "title": "Results:", "desc": "After diving deep into my UX research, all the insights and hard work came together in this fully interactive high-fidelity prototype. I invite you to explore and experience it!" })} <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"> <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 1px solid rgba(0, 0, 0, 0.1);" src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/kYbZQzyFiQLNmRcuyHwCK0/FeliciaFelicia_Project11?type=design&t=8QoeQDWaLhHxv6pM-1&scaling=scale-down&page-id=0%3A1&node-id=120-117&starting-point-node-id=120%3A117" allowfullscreen></iframe> </div> <div style="width: 150px; padding-top: 100px;"> <a href="/#projects"> ${renderComponent($$result2, "Button", Button, { "title": "Back", "border": false })} </a> </div> </div> </section> ` })}`;
}, "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/hikitia.astro", void 0);

const $$file = "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/hikitia.astro";
const $$url = "/hikitia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hikitia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
