import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
/* empty css                                 */

const Title = ({ title, subtitle, descriptions, skills, year }) => {
  return /* @__PURE__ */ jsxs("div", { className: "title-container", children: [
    /* @__PURE__ */ jsx("h1", { className: "font30 bottom-spacing extraBold", children: title }),
    /* @__PURE__ */ jsx("h2", { className: "font20 bottom-spacing semiBold", children: subtitle }),
    descriptions.map((desc, index) => /* @__PURE__ */ jsx("p", { className: "bottom-spacing", children: desc }, index)),
    /* @__PURE__ */ jsxs("div", { className: "title-wrapper", children: [
      /* @__PURE__ */ jsxs("div", { className: "left-side", children: [
        /* @__PURE__ */ jsx("h4", { children: "Expertise" }),
        /* @__PURE__ */ jsx("p", { children: skills })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "right-side", children: [
        /* @__PURE__ */ jsx("h4", { children: "Year" }),
        /* @__PURE__ */ jsx("p", { children: year })
      ] })
    ] })
  ] });
};

const Images = ({ images }) => {
  return /* @__PURE__ */ jsx("div", { className: "images-wrapper", children: images.map((image, index) => /* @__PURE__ */ jsx(
    "img",
    {
      className: "image radius8",
      src: image.src,
      alt: image.alt
    },
    index
  )) });
};

const Body = ({ title, desc }) => {
  return /* @__PURE__ */ jsxs("div", { className: "body-container", children: [
    /* @__PURE__ */ jsx("h1", { className: "font25 extraBold", children: title }),
    /* @__PURE__ */ jsx("p", { className: "description", children: desc })
  ] });
};

const List = ({ title, desc, items }) => {
  return /* @__PURE__ */ jsxs("div", { className: "list-container", children: [
    /* @__PURE__ */ jsx("h1", { className: "font25 extraBold", children: title }),
    /* @__PURE__ */ jsx("h4", { className: "description", children: desc }),
    /* @__PURE__ */ jsx("ol", { className: "list-items", children: items.map((item, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("p", { children: [
      "✦ ",
      item
    ] }) }, index)) })
  ] });
};

export { Body as B, Images as I, List as L, Title as T };
