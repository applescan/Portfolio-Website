import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_D07P6R4w.mjs';
import 'kleur/colors';
import 'html-escaper';
import { T as Title, I as Images, B as Body, L as List } from '../chunks/List_B7R8-9Ls.mjs';
import { B as Button, $ as $$Layout } from '../chunks/Layout_Dvrv0g8i.mjs';
export { renderers } from '../renderers.mjs';

const $$AppreciateYa = createComponent(($$result, $$props, $$slots) => {
  const projectInfo = {
    title: "AppreciateYa - Together, Let's Build a Happier, More Connected Workspace!",
    desc: `AppreciateYa transforms workplace gratitude with easy-to-send kudos, virtual coffees, and gift cards. It promotes a positive culture by celebrating every contribution. \u2728`,
    skills: "Full Stack Web Developer",
    year: "2024",
    videoUrl: "/img/appreciate/appreciateYa.mp4",
    images: [
      { src: "/img/appreciate/appreciateYa.jpg", alt: "project image cover" },
      { src: "/img/appreciate/AI.png", alt: "AI image cover" }
    ]
  };
  const links = [
    { title: "Try the app!", url: "https://appreciate-ya.vercel.app/" },
    { title: "View Code", url: "https://github.com/applescan/appreciate.ya" }
  ];
  const bodies = [
    {
      title: "Why is this problem valuable to address?",
      desc: `In today's fast-paced work environment, it's easy to overlook the power of a simple "thank you" or "great job."
    However, these small gestures of appreciation can significantly impact morale, motivation, and workplace happiness.
    That's where AppreciateYa comes in.`
    },
    {
      title: "New Feature",
      desc: `Introducing the latest feature to spark your creativity: AI Suggestion! Now, whenever you need a dose of inspiration or just a little nudge in the right direction, our AI can craft personalized kudos for you. Whether you're celebrating a team win, recognizing a colleague's hard work, or just spreading some positivity, AI Suggestion is here to help you express your appreciation in the most impactful way. Let AI ignite your imagination and help you pen the perfect note of praise.`
    },
    {
      title: "Goals",
      desc: `I believe that appreciation should be easy, meaningful, and fun.
    AppreciateYa is designed to be intuitive and engaging,
    ensuring that every team member feels valued and recognized.`
    },
    {
      title: "Built With",
      desc: `T3 Stack \u2022 Next.js \u2022 Prisma \u2022 Canva \u2022 Figma \u2022 React \u2022 Tailwind CSS \u2022 GraphQL \u2022 Typescript \u2022 Supabase \u2022 NextAuth \u2022 Node.js`
    }
  ];
  const features = {
    title: "Features",
    items: [
      "\u{1F48C} Send personalized appreciation messages, whether it's a warm thank you, congratulations, or a virtual coffee or gift card.",
      "\u{1F3C6} Discover your top fans and MVPs, and make sure no one feels left out.",
      "\u{1F4CA} Gain insights into the appreciation culture within your team or organization.",
      "\u{1F916} Meet AI Suggestion, your quick tool for crafting inspiring kudos. Express appreciation with creativity and ease."
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": projectInfo.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="whiteBg"> <div class="container"> ${renderComponent($$result2, "Title", Title, { "title": projectInfo.title, "subtitle": "", "descriptions": [projectInfo.desc], "skills": projectInfo.skills, "year": projectInfo.year })} ${renderComponent($$result2, "Images", Images, { "images": [
    { src: projectInfo.images[0].src, alt: projectInfo.images[0].alt }
  ] })} <br> <video style="width: 100%; height: 100%; padding-bottom: 50px;" class="radius8" controls> <source${addAttribute(projectInfo.videoUrl, "src")} type="video/mp4">
Your browser does not support the video tag.
</video> <br> <h1 class="extraBold font25">Links:</h1> <div class="flexNullCenter"> ${links.map((link) => renderTemplate`<div style="width: 190px; margin-right: 15px;"> <a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result2, "Button", Button, { "title": link.title, "border": false })} </a> </div>`)} </div> ${bodies.map((body) => renderTemplate`${renderComponent($$result2, "Body", Body, { "title": body.title, "desc": body.desc })}`)} ${renderComponent($$result2, "Images", Images, { "images": [
    { src: projectInfo.images[1].src, alt: projectInfo.images[1].alt }
  ] })} ${renderComponent($$result2, "Body", Body, { "title": "App", "desc": "" })} <p>
Visit <a class="purpleColor" href="https://appreciate-ya.vercel.app/" target="_blank">https://appreciate-ya.vercel.app/</a> to access the web application.
</p> ${renderComponent($$result2, "List", List, { "title": features.title, "items": features.items })} <div style="width: 150px; padding-top: 100px;"> <a href="/#projects"> ${renderComponent($$result2, "Button", Button, { "title": "Back", "border": false })} </a> </div> </div> </section> ` })}`;
}, "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/appreciate-ya.astro", void 0);

const $$file = "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/appreciate-ya.astro";
const $$url = "/appreciate-ya";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AppreciateYa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
