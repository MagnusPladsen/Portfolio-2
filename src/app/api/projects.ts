import { Project } from "../types/types";

const projects: Project[] = [
  {
    id: 1,
    title: "Semester Project 2",
    description:
      "An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.",
    status: "Done",
    grade: "A",
    image: "/images/NorAuc.jpeg",
    url: "https://norauc.pladsen.dev/",
    repo: "https://github.com/MagnusPladsen/SemesterProject2",
    stacks: [
      {
        id: 1,
        name: "HTML",
        logo: "/images/icons/html.jpg",
        url: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "CSS",
        logo: "/images/icons/css.jpg",
        url: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "JavaScript",
        logo: "/images/icons/javaScript.jpg",
        url: "https://en.wikipedia.org/wiki/JavaScript",
      },
    ],
  },
  {
    id: 2,
    title: "JavaScript Frameworks CA",
    description:
      "A mock e-com application built with React to meet the requirements of the JavaScript Frameworks CA.",
    status: "Done",
    grade: "A",
    image: "/images/NorShop.jpeg",
    url: "https://norshop.pladsen.dev/",
    repo: "https://github.com/MagnusPladsen/Front-end-Frameworks-CA",
    stacks: [
      {
        id: 1,
        name: "React",
        logo: "/images/icons/react.jpg",
        url: "https://react.dev/",
      },
      {
        id: 2,
        name: "TypeScript",
        logo: "/images/icons/typeScript.jpg",
        url: "https://www.typescriptlang.org/",
      },
      {
        id: 3,
        name: "Formik",
        logo: "/images/icons/formik.jpg",
        url: "https://formik.org/",
      },
      {
        id: 4,
        name: "Tailwind CSS",
        logo: "/images/icons/tailwindCSS.jpg",
        url: "https://tailwindcss.com/",
      },
      {
        id: 5,
        name: "Framer Motion",
        logo: "/images/icons/framerMotion.jpg",
        url: "https://www.framer.com/motion/animation/",
      },
      {
        id: 6,
        name: "Zod",
        logo: "/images/icons/zod.jpg",
        url: "https://zod.dev/",
      },
      {
        id: 7,
        name: "React Router Dom",
        logo: "/images/icons/reactRouterDom.jpg",
        url: "https://reactrouter.com/en/main",
      },
    ],
  },
  {
    id: 3,
    title: "Project Exam 2",
    description:
      "To take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate’s general development capabilities, in addition to visual and technical skills.",
    status: "Done",
    grade: "A",
    image: "/images/NorShop.jpeg",
    url: "https://holidaze.pladsen.dev/",
    repo: "https://github.com/MagnusPladsen/Project-Exam-2",
    stacks: [
      {
        id: 1,
        name: "React",
        logo: "/images/icons/react.jpg",
        url: "https://react.dev/",
      },
      {
        id: 2,
        name: "TypeScript",
        logo: "/images/icons/typeScript.jpg",
        url: "https://www.typescriptlang.org/",
      },
      {
        id: 3,
        name: "Vite",
        logo: "/images/icons/vite.jpg",
        url: "https://vitejs.dev/",
      },
      {
        id: 4,
        name: "React Hook Form",
        logo: "/images/icons/reactHookForm.jpg",
        url: "https://react-hook-form.com//",
      },
      {
        id: 5,
        name: "Tailwind CSS",
        logo: "/images/icons/tailwindCSS.jpg",
        url: "https://tailwindcss.com/",
      },
      {
        id: 6,
        name: "Framer Motion",
        logo: "/images/icons/framerMotion.jpg",
        url: "https://www.framer.com/motion/animation/",
      },
      {
        id: 7,
        name: "React Router Dom",
        logo: "/images/icons/reactRouterDom.jpg",
        url: "https://reactrouter.com/en/main",
      },
      {
        id: 8,
        name: "Redux Toolkit",
        logo: "/images/icons/reduxToolkit.jpg",
        url: "https://redux-toolkit.js.org/",
      },
    ],
  },
];

export default projects;
