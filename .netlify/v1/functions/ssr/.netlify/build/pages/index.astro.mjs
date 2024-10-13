import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_D07P6R4w.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
/* empty css                                 */
import { B as Button, $ as $$Layout } from '../chunks/Layout_Dvrv0g8i.mjs';
import contentful from 'contentful';
export { renderers } from '../renderers.mjs';

const About = ({ title, desc }) => {
  return /* @__PURE__ */ jsx("div", { className: "darkBg", children: /* @__PURE__ */ jsx("section", { id: "about", className: "about", children: /* @__PURE__ */ jsxs("div", { className: "headerInfo", children: [
    /* @__PURE__ */ jsx("h1", { className: "font40 bold whiteColor", children: title }),
    /* @__PURE__ */ jsx("div", { className: "whiteColor", dangerouslySetInnerHTML: { __html: desc } })
  ] }) }) });
};

const Card = ({ title, text, list }) => {
  return /* @__PURE__ */ jsxs("div", { className: "card-wrapper whiteBg radius8", children: [
    /* @__PURE__ */ jsxs("div", { className: "card-content", children: [
      /* @__PURE__ */ jsx("h4", { className: "font20 bold", children: title }),
      /* @__PURE__ */ jsx("p", { className: "font16 semiBold", children: text })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "offers-list", children: list.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "offer-item flex-null-center", children: [
      /* @__PURE__ */ jsx("div", { className: "checkmark-container", children: /* @__PURE__ */ jsx("span", { className: "emoji-checkmark", children: "✅" }) }),
      /* @__PURE__ */ jsx("p", { className: "font15 regular", children: item })
    ] }, index)) })
  ] });
};

function Experience({ experienceItems, educationItems }) {
  return /* @__PURE__ */ jsx("div", { className: "darkBg", children: /* @__PURE__ */ jsxs("section", { id: "resume", className: "experience-wrapper", children: [
    /* @__PURE__ */ jsxs("div", { className: "header-info", children: [
      /* @__PURE__ */ jsx("h1", { className: "font40 bold whiteColor", children: "Resume" }),
      /* @__PURE__ */ jsx("p", { className: "font25 whiteColor", children: "Work Experience" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "tables-wrapper", children: experienceItems.map((item, index) => /* @__PURE__ */ jsx("div", { className: "table-box-large", children: /* @__PURE__ */ jsx(Card, { title: item.title, text: item.text, list: item.list }) }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "spacer" }),
    /* @__PURE__ */ jsx("div", { className: "header-info", children: /* @__PURE__ */ jsx("p", { className: "font25 whiteColor", children: "Education" }) }),
    /* @__PURE__ */ jsx("div", { className: "tables-wrapper", children: educationItems.map((item, index) => /* @__PURE__ */ jsx("div", { className: "table-box", children: /* @__PURE__ */ jsx(Card, { title: item.title, text: item.text, list: item.list }) }, index)) })
  ] }) });
}

function SvgComponent(props) {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 186.223, height: 249.21, viewBox: "0 0 186.223 249.21", ...props, children: /* @__PURE__ */ jsxs("g", { "data-name": "Group 102", fill: "#bebdce", children: [
    /* @__PURE__ */ jsxs("g", { "data-name": "Group 59", transform: "translate(-.09 .208)", children: [
      /* @__PURE__ */ jsx("ellipse", { "data-name": "Ellipse 1", cx: 4, cy: 5, rx: 4, ry: 5, transform: "translate(.228 -.08)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 2", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(.09 39.806)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 3", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(.09 79.819)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 4", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(.09 119.833)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 5", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(.09 159.846)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 6", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(.09 199.859)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 7", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(.09 239.873)" })
    ] }),
    /* @__PURE__ */ jsxs("g", { "data-name": "Group 60", transform: "translate(35.419)", children: [
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 8", cx: 4.565, cy: 4.565, r: 4.565 }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 9", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 40.014)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 10", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 80.027)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 11", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 120.041)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 12", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 160.054)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 13", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 200.067)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 14", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 240.081)" })
    ] }),
    /* @__PURE__ */ jsxs("g", { "data-name": "Group 61", transform: "translate(70.838)", children: [
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 15", cx: 4.565, cy: 4.565, r: 4.565 }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 16", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 40.014)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 17", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 80.027)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 18", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 120.041)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 19", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 160.054)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 20", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 200.067)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 21", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 240.081)" })
    ] }),
    /* @__PURE__ */ jsxs("g", { "data-name": "Group 62", transform: "translate(106.256)", children: [
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 22", cx: 4.565, cy: 4.565, r: 4.565 }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 23", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 40.014)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 24", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 80.027)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 25", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 120.041)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 26", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 160.054)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 27", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 200.067)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 28", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 240.081)" })
    ] }),
    /* @__PURE__ */ jsxs("g", { "data-name": "Group 63", transform: "translate(141.675)", children: [
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 29", cx: 4.565, cy: 4.565, r: 4.565 }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 30", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 40.014)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 31", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 80.027)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 32", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 120.041)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 33", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 160.054)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 34", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 200.067)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 35", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 240.081)" })
    ] }),
    /* @__PURE__ */ jsxs("g", { "data-name": "Group 64", transform: "translate(177.094)", children: [
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 36", cx: 4.565, cy: 4.565, r: 4.565 }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 37", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 40.014)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 38", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 80.027)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 39", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 120.041)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 40", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 160.054)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 41", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 200.067)" }),
      /* @__PURE__ */ jsx("circle", { "data-name": "Ellipse 42", cx: 4.565, cy: 4.565, r: 4.565, transform: "translate(0 240.081)" })
    ] })
  ] }) });
}

const Profile = ({ title, subTitle, desc }) => {
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "wrapper", children: [
    /* @__PURE__ */ jsx("div", { className: "left-side", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "extra-bold font60", children: title }),
      /* @__PURE__ */ jsx("h2", { children: subTitle }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: desc } }),
      /* @__PURE__ */ jsxs("div", { className: "buttons-row", children: [
        /* @__PURE__ */ jsx("div", { className: "responsive-button", children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/felicia-fel/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { title: "Linkedin", border: true }) }) }),
        /* @__PURE__ */ jsx("div", { className: "responsive-button", children: /* @__PURE__ */ jsx("a", { href: "https://github.com/applescan", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { title: "Github", border: false }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "padding-top-10", children: /* @__PURE__ */ jsx("div", { className: "responsive-button wide", children: /* @__PURE__ */ jsx("a", { href: "https://www.institutedata.com/blog/unlocking-potential-felicias-journey-from-design-to-software-engineering/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { title: "My Software Dev Journey: An Interview with Institute of Data", border: true }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "right-side", children: [
      /* @__PURE__ */ jsxs("div", { className: "image-wrapper", children: [
        /* @__PURE__ */ jsx("img", { className: "radius8", height: 500, width: 500, src: "/img/felicia-profile-2.png", alt: "profile-image", style: { zIndex: 9 } }),
        /* @__PURE__ */ jsx("div", { className: "dots-wrapper", children: /* @__PURE__ */ jsx(SvgComponent, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grey-div light-bg" })
    ] })
  ] });
};

const ProjectBox = ({ img, title, text, link }) => {
  return /* @__PURE__ */ jsxs("div", { className: "projectBox", children: [
    /* @__PURE__ */ jsx("a", { className: "img-btn animate pointer", href: link, children: /* @__PURE__ */ jsx("img", { className: "radius8", src: img, alt: "project" }) }),
    /* @__PURE__ */ jsx("h3", { className: "font20 bold", children: title }),
    /* @__PURE__ */ jsx("p", { className: "font13", children: text })
  ] });
};

function Projects({ projectItems }) {
  return /* @__PURE__ */ jsx("div", { className: "whiteBg", children: /* @__PURE__ */ jsxs("section", { id: "projects", className: "project-container", children: [
    /* @__PURE__ */ jsx("h1", { className: "projects-title", children: "Projects" }),
    /* @__PURE__ */ jsx("div", { className: "projects-grid", children: projectItems.map((project, index) => /* @__PURE__ */ jsx(
      ProjectBox,
      {
        img: project.img,
        title: project.title,
        text: project.text,
        link: project.link
      },
      index
    )) })
  ] }) });
}

const contentfulClient = contentful.createClient({
  space: "pdjfe7gdz2sa",
  accessToken: "qQ8vW8gGuW7Qfwr9ok-WUQRWovr6FeUF9-xej7FZJAs",
  host: "cdn.contentful.com"
});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const profileEntries = await contentfulClient.getEntries({
    content_type: "hero"
  });
  const aboutEntries = await contentfulClient.getEntries({
    content_type: "aboutMe"
  });
  const projectEntries = await contentfulClient.getEntries({
    content_type: "projectCard"
  });
  const experienceEntries = await contentfulClient.getEntries({
    content_type: "workExperience"
  });
  const educationEntries = await contentfulClient.getEntries({
    content_type: "education"
  });
  const heroItem = profileEntries.items.length > 0 ? {
    title: profileEntries.items[0].fields.title,
    desc: profileEntries.items[0].fields.description,
    subTitle: profileEntries.items[0].fields.subTitle
  } : null;
  const aboutItem = aboutEntries.items.length > 0 ? {
    title: aboutEntries.items[0].fields.title,
    desc: aboutEntries.items[0].fields.description
  } : null;
  function isStringArray(value) {
    return Array.isArray(value) && value.every((item) => typeof item === "string");
  }
  const experienceItems = experienceEntries.items.map((item) => ({
    title: item.fields.title,
    text: item.fields.period,
    list: isStringArray(item.fields.descriptionList) ? item.fields.descriptionList : []
  }));
  const educationItems = educationEntries.items.map((item) => ({
    title: item.fields.title,
    text: item.fields.period,
    list: isStringArray(item.fields.description) ? item.fields.description : []
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Felicia's Portfolio Website" }, { "default": ($$result2) => renderTemplate`${heroItem && renderTemplate`${renderComponent($$result2, "Profile", Profile, { "title": heroItem.title, "subTitle": heroItem.subTitle, "desc": heroItem.desc })}`}${aboutItem && renderTemplate`${renderComponent($$result2, "About", About, { "title": aboutItem.title, "desc": aboutItem.desc })}`}${projectEntries.items.length > 0 && renderTemplate`${renderComponent($$result2, "Projects", Projects, { "projectItems": projectEntries.items.slice().reverse().map((item) => ({
    img: item.fields.img,
    title: item.fields.title,
    text: item.fields.description,
    link: item.fields.link
  })) })}`}${experienceItems.length > 0 && renderTemplate`${renderComponent($$result2, "Experience", Experience, { "experienceItems": experienceItems, "educationItems": educationItems })}`}` })}`;
}, "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/index.astro", void 0);

const $$file = "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
