import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, e as renderHead, d as renderComponent, f as renderSlot } from './astro/server_D07P6R4w.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                 */
import 'clsx';

const Button = ({ title, action, border = false }) => {
  const buttonClass = border ? "button border" : "button";
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: buttonClass,
      onClick: action,
      children: title
    }
  );
};

function Contact() {
  const getCurrentYear = () => {
    return (/* @__PURE__ */ new Date()).getFullYear();
  };
  return /* @__PURE__ */ jsx("div", { className: "footer", children: /* @__PURE__ */ jsx("div", { className: "whiteBg", children: /* @__PURE__ */ jsx("div", { className: "innerWrapper flexSpaceCenter", style: { padding: "30px 0" }, children: /* @__PURE__ */ jsxs("p", { className: "styleP font13", children: [
    "© ",
    getCurrentYear(),
    " Designed and coded by - ",
    /* @__PURE__ */ jsx("span", { className: "purpleColor font13", children: "Felicia Fel" }),
    " 🪅 | Email:",
    " ",
    /* @__PURE__ */ jsx("a", { href: "mailto:feliu.ren@gmail.com", children: "feliu.ren@gmail.com" })
  ] }) }) }) });
}

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { siteTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-4z36i57k> <a href="/#home" data-astro-cid-4z36i57k><h1 class="extraBold" data-astro-cid-4z36i57k>${siteTitle}</h1></a> <input type="checkbox" id="menu-toggle" class="menu-toggle" data-astro-cid-4z36i57k> <label for="menu-toggle" class="hamburger" data-astro-cid-4z36i57k>☰</label> <nav class="nav" data-astro-cid-4z36i57k> <ul class="nav-links font16" data-astro-cid-4z36i57k> <li data-astro-cid-4z36i57k><a href="/#home" data-astro-cid-4z36i57k>Home</a></li> <li data-astro-cid-4z36i57k><a href="/#about" data-astro-cid-4z36i57k>About</a></li> <li data-astro-cid-4z36i57k><a href="/#projects" data-astro-cid-4z36i57k>Projects</a></li> <li data-astro-cid-4z36i57k><a href="/#resume" data-astro-cid-4z36i57k>Resume</a></li> </ul> </nav> <div class="sidebar font16" data-astro-cid-4z36i57k> <label for="menu-toggle" class="close-btn" data-astro-cid-4z36i57k>×</label> <ul data-astro-cid-4z36i57k> <li data-astro-cid-4z36i57k><a href="/#home" data-astro-cid-4z36i57k>Home</a></li> <li data-astro-cid-4z36i57k><a href="/#about" data-astro-cid-4z36i57k>About</a></li> <li data-astro-cid-4z36i57k><a href="/#projects" data-astro-cid-4z36i57k>Projects</a></li> <li data-astro-cid-4z36i57k><a href="/#resume" data-astro-cid-4z36i57k>Resume</a></li> </ul> </div> </header> `;
}, "/Users/applescan/Documents/GitHub/tender-trappist/src/components/nav/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><link rel="stylesheet" href="/src/styles/global.css"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap" rel="stylesheet"><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png" sizes="any"><meta name="description" content="Welcome to Felicia Fel's portfolio, showcasing innovative full-stack development projects. Explore expertise in web technologies,
      including React, Next.js, and more, designed to create user-friendly and impactful applications."><title>
      ${title}
    </title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "siteTitle": "Felicia Fel" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", Contact, {})} </body></html>`;
}, "/Users/applescan/Documents/GitHub/tender-trappist/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Button as B };
