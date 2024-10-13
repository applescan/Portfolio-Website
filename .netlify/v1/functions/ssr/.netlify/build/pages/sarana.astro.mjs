import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_D07P6R4w.mjs';
import 'kleur/colors';
import 'html-escaper';
import { T as Title, I as Images, B as Body, L as List } from '../chunks/List_rWYf4iXP.mjs';
import { B as Button, $ as $$Layout } from '../chunks/Layout_7yXHhCp-.mjs';
export { renderers } from '../renderers.mjs';

const $$Sarana = createComponent(($$result, $$props, $$slots) => {
  const projectInfo = {
    title: "Sarana Dashboard & Point of Sales System",
    desc: `Sarana Point of Sales System is a user-friendly POS solution designed to simplify sales and inventory management for small businesses.
  Created specifically for my family\u2019s shop, Sarana offers a streamlined interface to handle transactions, track stock levels, and manage orders with ease.`,
    skills: "Full Stack Web Developer",
    year: "2024",
    videoUrl: "/img/sarana/sarana.mp4",
    images: [
      { src: "/img/sarana/1.webp", alt: "project image cover" },
      { src: "/img/sarana/2.webp", alt: "image 2" }
    ]
  };
  const links = [
    { title: "Try the app!", url: "https://sarana-dashboard.vercel.app/" },
    { title: "View Code", url: "https://github.com/applescan/Sarana-Dashboard" }
  ];
  const bodies = [
    {
      title: "Why is this problem valuable to address?",
      desc: `I developed Sarana Point of Sales System to assist with my family\u2019s small business, where a user-friendly and straightforward POS system was needed.
    The previous system was overly complex and difficult to manage, which made daily operations more challenging than necessary.
    Sarana was created to address these issues by providing a simple, intuitive interface that aligns perfectly with their specific needs.`
    },
    {
      title: "Quirks",
      desc: `The application is available in both Indonesian and English to cater to the local context in Indonesia, ensuring that the system is accessible and useful for my parents' business.
    Every feature in the app is designed with their operational quirks and requirements in mind, making Sarana a customized solution that simplifies their point-of-sale management while enhancing efficiency.`
    },
    {
      title: "\u2728 Bonus",
      desc: `This version is just a test database so if you hit 404 it's probably because the database has hit the max traffic quota. Feel free to play around, explore the features, and send me your thoughts! I'd love to hear your feedback as I keep refining it.
`
    },
    {
      title: "Built With",
      desc: `\u2022 Next.js \u2022 Prisma \u2022 Clerk \u2022 Canva \u2022 Echarts \u2022 Figma \u2022 React \u2022 Tailwind CSS \u2022 GraphQL \u2022 Typescript \u2022 Supabase \u2022 Node.js`
    }
  ];
  const dashboard = {
    title: "Dashboard",
    items: [
      "Real-Time Updates: See what\u2019s hot and what\u2019s not with instant insights into sales, stock, and revenue. \u{1F50D}",
      "AI Insights: Discover trends and make smart decisions with AI-powered wisdom. \u{1F916}\u2728"
    ]
  };
  const product = {
    title: "Product Management",
    items: [
      "Search & Filter: Find exactly what you\u2019re looking for in seconds with powerful search and filter options. \u{1F575}\uFE0F\u200D\u2642\uFE0F",
      "Stock Monitoring: Keep your shelves stocked and your customers happy with real-time stock updates. \u{1F4E6}",
      "Admin Controls: Manage products effortlessly \u2013 add, edit, or delete items with a few clicks. \u{1F6E0}\uFE0F"
    ]
  };
  const order = {
    title: "Order Management",
    items: [
      "Order Search: Quickly dig through orders or pick a date range to view your sales history. \u{1F4C5}",
      "Admin Actions: Add, update, or remove orders without breaking a sweat. \u{1F9D1}\u200D\u{1F4BC}",
      "Mark as Received: Update stock levels automatically by marking orders as received. \u2705"
    ]
  };
  const stack = {
    title: "Technology Stack",
    items: [
      "User Management: Clerk \u2013 Your key to smooth, secure logins. \u{1F511}",
      "Framework: Next.js \u2013 Building fast, modern web experiences. \u26A1",
      "Backend: Prisma, Apollo, and GraphQL \u2013 Powering a flexible and robust backend. \u{1F4AA}",
      "AI Insights: OpenAI \u2013 Making your data smarter with AI. \u{1F913}",
      "Styling: Tailwind CSS and ShadCN \u2013 Bringing a touch of modern design to your interface. \u{1F3A8}"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": projectInfo.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="whiteBg"> <div class="container"> ${renderComponent($$result2, "Title", Title, { "title": projectInfo.title, "subtitle": "", "descriptions": [projectInfo.desc], "skills": projectInfo.skills, "year": projectInfo.year })} ${renderComponent($$result2, "Images", Images, { "images": projectInfo.images })} <br> <video style="width: 100%; height: 100%; padding-bottom: 50px;" class="radius8" controls> <source${addAttribute(projectInfo.videoUrl, "src")} type="video/mp4">
Your browser does not support the video tag.
</video> <br> <h1 class="extraBold font25">Links:</h1> <div class="flexNullCenter"> ${links.map((link) => renderTemplate`<div style="width: 190px; margin-right: 15px;"> <a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result2, "Button", Button, { "title": link.title, "border": false })} </a> </div>`)} </div> ${bodies.map((body) => renderTemplate`${renderComponent($$result2, "Body", Body, { "title": body.title, "desc": body.desc })}`)} ${renderComponent($$result2, "Body", Body, { "title": "App", "desc": "" })} <p>
Visit <a class="purpleColor" href="https://sarana-dashboard.vercel.app/" target="_blank">https://sarana-dashboard.vercel.app/</a> to access the web application.
</p> <br> <h1 class="font30 extraBold">Key Features</h1> ${renderComponent($$result2, "List", List, { "title": dashboard.title, "items": dashboard.items })} ${renderComponent($$result2, "List", List, { "title": product.title, "items": product.items })} ${renderComponent($$result2, "List", List, { "title": order.title, "items": order.items })} ${renderComponent($$result2, "List", List, { "title": stack.title, "items": stack.items })} <div style="width: 150px; padding-top: 100px;"> <a href="/#projects"> ${renderComponent($$result2, "Button", Button, { "title": "Back", "border": false })} </a> </div> </div> </section> ` })}`;
}, "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/sarana.astro", void 0);

const $$file = "/Users/applescan/Documents/GitHub/tender-trappist/src/pages/sarana.astro";
const $$url = "/sarana";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sarana,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
