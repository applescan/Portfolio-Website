import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_D07P6R4w.mjs';
import 'kleur/colors';
import 'html-escaper';
import { T as Title, I as Images, B as Body, L as List } from '../chunks/List_B7R8-9Ls.mjs';
import { B as Button, $ as $$Layout } from '../chunks/Layout_BHm4UjZ3.mjs';
export { renderers } from '../renderers.mjs';

const $$NzLocum = createComponent(($$result, $$props, $$slots) => {
  const projectInfo = {
    title: "NZ Veterinary Locum Network",
    desc1: "In order to market themselves and look for jobs, there hasn't been a website created exclusively for veterinary locums in New Zealand.",
    desc2: "This project intends to develop a platform where veterinary locums can create profiles and introduce themselves, and companies can post job vacancies for locums. We resolve the current communication issue by facilitating direct communication between veterinarian offices and locum tenens.",
    skills: "Full Stack Web Developer",
    year: "2023"
  };
  const links = [
    {
      title: "Try the app!",
      url: "https://nz-locum-network.netlify.app/"
    },
    {
      title: "Front-end Code",
      url: "https://github.com/applescan/NZ-Veterinary-Locum-Frontend"
    },
    {
      title: "Back-end Code",
      url: "https://github.com/applescan/NZ-Veterinary-Locum-CapstoneProject"
    }
  ];
  const sectionDescriptions = {
    relevance: `There is still no infrastructure that enables veterinary locums to openly promote themselves outside of a recruitment agency, making it very difficult for locums and clinics to connect without third-party intervention (recruitment agency). If new veterinary locums don't already have personal relationships with clinics, finding one can be very challenging. They have no platform to view and identify the clinics that require them. Currently, a Facebook group is the only location locums may access information. My aim is to have all doctors' information in a beautiful, understandable style so that they don't have to wade through several Facebook postings to figure out which locum is reliable and reachable for a clinic.`,
    goals: `With this project, I intend to make it easier for veterinary clinics and locums to organize employment on their own without the use of a recruitment firm by centralizing lists of available jobs and veterinary locums. The NZ Veterinary Locum Network will be the only platform to keep track of veterinary locum's profiles that are visible to the public online, filling a specialized need for a distinct sector on the website rather than specialized Facebook groups.`,
    builtWith: `\u2022 Axios \u2022 Bcryptjs \u2022 Express.js \u2022 MongoDB \u2022 MongoDB Atlas \u2022 Multer \u2022 Node.js \u2022 Swagger UI \u2022 Bootstrap \u2022 CSS \u2022 Canva \u2022 Figma \u2022 React \u2022 MUI \u2022 MDB Bootstrap.`,
    enhancement: `In the future, I am planning to develop a job listing due date feature, so when a job listing is expired it will automatically be removed from the website.`
  };
  const userGuideDoctor = [
    "Register an account as a doctor",
    "Sign in with your credentials from signing up",
    "You will be redirected to your profile when login is successful",
    "You can update and delete your profile. You can also browse clinics, jobs, and other doctors"
  ];
  const userGuideClinic = [
    "Register an account as a clinic",
    "Sign in with your credentials from signing up",
    "You will be redirected to your profile when login is successful",
    "You can update and delete your profile.",
    "You can add job listing, update your job listing and delete it",
    "You can also browse clinics, jobs, and other doctors"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": projectInfo.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="whiteBg"> <div class="container"> <div class="header-info"> ${renderComponent($$result2, "Title", Title, { "title": projectInfo.title, "subtitle": "", "descriptions": [projectInfo.desc1, projectInfo.desc2], "skills": projectInfo.skills, "year": projectInfo.year })} </div> ${renderComponent($$result2, "Images", Images, { "images": [
    { src: "/img/locum/nz-locum1.jpg", alt: "project image cover" },
    { src: "/img/locum/nz-locum2.jpg", alt: "mobile mockup image" }
  ] })} <h1 class="extraBold font25">Links:</h1> <div style="display: flex; gap: 20px;"> ${links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result2, "Button", Button, { "title": link.title, "border": false })} </a>`)} </div> ${renderComponent($$result2, "Body", Body, { "title": "What made this project relevant?", "desc": sectionDescriptions.relevance })} ${renderComponent($$result2, "Body", Body, { "title": "Goals", "desc": sectionDescriptions.goals })} ${renderComponent($$result2, "Body", Body, { "title": "Built With", "desc": sectionDescriptions.builtWith })} ${renderComponent($$result2, "Body", Body, { "title": "App", "desc": "" })} <p>
Visit <a class="purpleColor" href="https://nz-locum-network.netlify.app/" target="_blank" rel="noopener noreferrer">https://nz-locum-network.netlify.app/</a> to access the web application.
</p> ${renderComponent($$result2, "List", List, { "title": "User Guide (As a Doctor)", "items": userGuideDoctor })} ${renderComponent($$result2, "List", List, { "title": "User Guide (As a Clinic)", "items": userGuideClinic })} <h2>Bug / Feature Request</h2> <p> <b>Known limitations:</b> When you register a user, any uploaded image that's larger than 1 Mb will not go through.
        This is because the TSL certificate from the cloud server is built with an older version of security policies,
        and your browser won't allow a large file to be sent. The console log will show that it's a CORS issue.
        More information regarding TSL certificate can be found
<a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html" target="_blank" class="purpleColor">
here.
</a> <br><br> <b>If you're running the backend in your local environment, there should be no problem with CORS and uploading images larger than 1mb.</b> </p> ${renderComponent($$result2, "Body", Body, { "title": "Future Software Enhancement List", "desc": sectionDescriptions.enhancement })} <div style="width: 150px; padding-top: 100px;"> <a href="/#projects"> ${renderComponent($$result2, "Button", Button, { "title": "Back", "border": false })} </a> </div> </div> </section> ` })}`;
}, "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/nz-locum.astro", void 0);

const $$file = "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/nz-locum.astro";
const $$url = "/nz-locum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NzLocum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
