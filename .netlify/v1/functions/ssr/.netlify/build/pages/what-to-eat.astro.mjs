import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_D07P6R4w.mjs';
import 'kleur/colors';
import 'html-escaper';
import { T as Title, I as Images, B as Body, L as List } from '../chunks/List_rWYf4iXP.mjs';
import { B as Button, $ as $$Layout } from '../chunks/Layout_7yXHhCp-.mjs';
export { renderers } from '../renderers.mjs';

const $$WhatToEat = createComponent(($$result, $$props, $$slots) => {
  const projectInfo = {
    title: "What to Eat - A Recipe Recommendation Engine \u{1F32D}\u{1F96B}",
    desc1: `What to Eat - is a recipe recommendation engine that suggests delicious recipes based on your dietary preferences and ingredients on hand,
           while also helping to reduce food waste. \u{1F374}`,
    desc2: `If you are like me, meal planning can be a challenge, especially when you have limited ingredients on hand or dietary restrictions to consider.
           What to Eat takes the guesswork out of meal planning and helps you find delicious recipes that fit your unique preferences and needs.`,
    skills: "Full Stack Web Developer",
    year: "2023"
  };
  const links = [
    { title: "Try the app!", url: "https://what-to-eat-2.vercel.app/" },
    { title: "View Code", url: "https://github.com/applescan/what-to-eat-2" },
    { title: "Featured on Product Hunt", url: "https://www.producthunt.com/products/what-to-eat-2" }
  ];
  const userGuide = {
    title: "User Guide",
    items: [
      "Click the get recipe button from the homescreen.",
      "Select your dietary preferences and ingredients at home.",
      "Click next, and recipe recommendations based on your preferences will show up.",
      "Click on the recipe you want to cook or experiment with!"
    ]
  };
  const limitations = `
  If there is a typo in the ingredients form, the result will not show properly, so the user has to be very precise when inputting their items.
  Sometimes Spoonacular API includes items that are not part of the user's dietary requirements.
`;
  const futureEnhancements = `
  In the future, I am planning to include NLP in the ingredients form, so when a user types something that is not precise, the NLP can predict what the user means and fix those inputs.
  Another future enhancement will be adding meal planning capabilities and the ability to add favorite meals.
`;
  const images = [
    { src: "/img/what-to-eat/What-to-eat-1.png", alt: "project image cover" },
    { src: "/img/what-to-eat/What-to-eat-2.png", alt: "mockup image" }
  ];
  const bodies = [
    {
      title: "Why this project?",
      desc: "I created this project during my spare time to learn Typescript and Next.js, and it has been a fun and fulfilling experience. \u{1F913}"
    },
    {
      title: "Goals",
      desc: "By suggesting recipes based on the ingredients you already have at home, you can use up those items before they go bad and minimize the amount of food that gets thrown away. \u{1F30D} I hope this project can help people find inspiration and joy in cooking at home. Please give it a try and let me know what you think!"
    },
    {
      title: "Built With",
      desc: "T3 Stack \u2022 Canva \u2022 Figma \u2022 React \u2022 Tailwind CSS \u2022 Spoonacular API \u2022 Typescript \u2022 Prisma \u2022 tRPC \u2022 NextAuth.js \u2022 Next.js \u2022 Node.js"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": projectInfo.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="whiteBg"> <div class="container"> ${renderComponent($$result2, "Title", Title, { "title": projectInfo.title, "subtitle": "", "descriptions": [projectInfo.desc1, projectInfo.desc2], "skills": projectInfo.skills, "year": projectInfo.year })} ${renderComponent($$result2, "Images", Images, { "images": images })} <br> <h1 class="extraBold font25">Links:</h1> <div class="flexNullCenter"> ${links.map((link) => renderTemplate`<div style="width: 190px; margin-right: 15px;"> <a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result2, "Button", Button, { "title": link.title, "border": false })} </a> </div>`)} </div> ${bodies.map((body) => renderTemplate`${renderComponent($$result2, "Body", Body, { "title": body.title, "desc": body.desc })}`)} ${renderComponent($$result2, "Body", Body, { "title": "App", "desc": "" })} <p>
Visit <a class="purpleColor" href="https://what-to-eat-2.vercel.app/" target="_blank">https://what-to-eat-2.vercel.app/</a> to access the web application.
</p> ${renderComponent($$result2, "List", List, { "title": userGuide.title, "items": userGuide.items })} ${renderComponent($$result2, "Body", Body, { "title": "Bug / Feature Request", "desc": "" })} <b>Known limitations:</b> <p>${limitations}</p> ${renderComponent($$result2, "Body", Body, { "title": "Future Software Enhancement List", "desc": futureEnhancements })} <div style="width: 150px; padding-top: 100px;"> <a href="/#projects"> ${renderComponent($$result2, "Button", Button, { "title": "Back", "border": false })} </a> </div> </div> </section> ` })}`;
}, "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/what-to-eat.astro", void 0);

const $$file = "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/what-to-eat.astro";
const $$url = "/what-to-eat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WhatToEat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
