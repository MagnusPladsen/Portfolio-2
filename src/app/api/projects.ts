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
    stacks: [
      {
        id: 1,
        name: "React",
        logo: "/images/react.png",
        url: "https://reactjs.org/",
      },
      {
        id: 2,
        name: "Node.js",
        logo: "/images/nodejs.png",
        url: "https://nodejs.org/",
      },
      {
        id: 3,
        name: "MongoDB",
        logo: "/images/mongodb.png",
        url: "https://www.mongodb.com/",
      },
    ],
  },
];

export default projects;