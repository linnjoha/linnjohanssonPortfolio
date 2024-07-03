import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  miniLibrary,
  airBean,
  bonzAI,
  starWars,
  sQLite,
  sass,
  csharp,
  family,
  hiking,
  iceland,
  outdoor,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "about",
  },
  {
    id: "work",
    title: "work",
  },
  {
    id: "contact",
    title: "contact",
  },
];

const socialLinks = [
  {
    id: "github",
    link: "https://github.com/linnjoha",
  },
  {
    id: "linkedIn",
    link: "www.linkedin.com/in/linn-johansson-795a74293",
  },
];

const abouts = [
  {
    title: "family",
    icon: family,
  },
  {
    title: "outdoor life",
    icon: outdoor,
  },
  {
    title: "adventure",
    icon: iceland,
  },

  {
    title: "training",
    icon: hiking,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Sass",
    icon: sass,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQLite",
    icon: sQLite,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "personal portfolio",
    img: portfolio,
    link: "https://github.com/linnjoha/linnjohanssonPortfolio",
    name: "Portfolio",
    desc: [
      "React application to show some of my projects.",
      "Research about three.js, creating own design on figma and deploy on github",
      "JavaScript with react+vite, css, three.js",
    ],
  },
  {
    title: "school project TypeScript",
    img: miniLibrary,
    link: "https://github.com/linnjoha/mini-library?tab=readme-ov-file",
    name: "Mini library",
    desc: [
      "Using rest-api to fetch information about products and show on UI.",
      "Search functionality to search for books",
      "TypeScript and CSS.",
    ],
  },
  {
    title: "school project html, css, javaScript",
    img: starWars,
    link: "https://github.com/linnjoha/star-wars?tab=readme-ov-file",
    name: "Star Wars catalog",
    desc: [
      "Practice with fetching data from rest-api.",
      "Creating catalog from figma skiss.",
    ],
  },
  {
    title: "school project simple responsive HTML/CSS",
    img: bonzAI,
    link: "https://github.com/linnjoha/Bonz.ai",
    name: "Bonz.ai",
    desc: [
      "First project to create hotel website.",
      "Responsive design.",
      "Own design from figma skiss.",
    ],
  },
  {
    title: "school project react, typescript, vite, scss",
    img: airBean,
    link: "https://github.com/linnjoha/linn-johansson_FU-JS23_individuell?tab=readme-ov-file",
    name: "AirBean",
    desc: [
      "Developing a SPA for coffee company from figma skiss.",
      "Ordering function for both guest and signed user width jwt-token.",
      "Fetching data from rest API.",
    ],
  },
];

export { socialLinks, technologies, abouts, experiences };
