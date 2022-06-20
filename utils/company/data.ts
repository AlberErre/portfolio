import { CompanyData, CompanyName } from "./types";

export const companies: CompanyData[] = [
  {
    name: CompanyName.BBVA,
    description:
      "BBVA is a spanish bank. They focus on digitalization and have a large team of developers to make both their web and mobile applications.",
    position:
      "Developed components for the frontend of the mobile application using JavaScript (they use a custom framework created by the bank).",
    dates: "Jan 2019 - May 2019",
    techStack: ["JavaScript", "Mocha"],
    image: {
      alt: CompanyName.BBVA,
      imgSource: `/companies/${CompanyName.BBVA}.png`,
    },
  },
  {
    name: CompanyName.CODEOSCOPIC,
    description:
      "Codeoscopic is a real-time insurance pricing provider. It uses a powerful backend service to retrieve real time data from different spanish insurance companies and aggregates them into a frontend application.",
    position:
      "My role focused on building and defining an entire frontend application using React. A migration was needed because they were using a very old framework. I was working directly with CTO and getting involved in product decision making.",
    dates: "Jun 2019 - Aug 2020",
    techStack: ["React", "TypeScript", "Redux", "Formik", "Jest"],
    image: {
      alt: CompanyName.CODEOSCOPIC,
      imgSource: `/companies/${CompanyName.CODEOSCOPIC}.svg`,
    },
    link: "https://codeoscopic.com/",
  },
  {
    name: CompanyName.TRIVE,
    description:
      "Trive is an online car dealer in Spain. They specialized on doing virtual tours for cars, motorbikes and trucks. Making the buying more easy through digitalization.",
    position:
      "Supporting the team by developing pages and components using Vue (v2), also applying unit testing on these components (Jest), as well as end-to-end testing on relevant user flows using Cypress.",
    dates: "Aug 2020 - Sep 2020",
    techStack: ["Vue", "Cypress", "Jest"],
    image: {
      alt: CompanyName.TRIVE,
      imgSource: `/companies/${CompanyName.TRIVE}.png`,
    },
    link: "https://gotrive.com/",
  },
  {
    name: CompanyName.WONDO,
    description:
      "Wondo is a mobility app based in Madrid (Spain). This company was part of Ferrovial (spanish multinational). The core business of the app was provide alternative mobility solutions for employees from big corporations based in Madrid, by matching bus, metro, scooters and taxi services to allow alternative routes of mobility within the city.",
    position:
      "Main frontend engineer on Rosseta squad, our squad was responsible for Signup/Login and User Account features. My role focused on develop the React Native frontend as well as collaborate deeply with Design, Product managers and QA department to define and develop features, we applied heavy testing on our app using Jest.",
    dates: "Sep 2020 - Jun 2021",
    techStack: ["React Native", "TypeScript", "Jest", "Expo"],
    image: {
      alt: CompanyName.WONDO,
      imgSource: `/companies/${CompanyName.WONDO}.svg`,
    },
    link: "https://www.wondo.es/",
  },
  {
    name: CompanyName.LIBEEN,
    description:
      "Libeen is a spanish startup that facilitates the process of purchasing a house digitally, making the purchasing process more accessible for young people.",
    position:
      "Supporting the team by developing pages and components using React, also applying unit testing on these components (Jest), as well as end-to-end testing on relevant user flows using Cypress.",
    dates: "Jun 2021 - Jul 2021",
    techStack: ["React", "Next.js", "TypeScript", "Jest", "Cypress"],
    image: {
      alt: CompanyName.LIBEEN,
      imgSource: `/companies/${CompanyName.LIBEEN}.png`,
    },
    link: "https://libeen.com/",
  },
  {
    name: CompanyName.CLASSING,
    description:
      "Classing is an online 1-1 school. They match students with online teachers to learn english online.",
    position:
      "Developed a frontend application from scratch using React (Next.js framework), as well as a Design System and a Components Library using Storybook. This application was used to handle the digital school more easily, as their internal process were mostly manual.",
    dates: "Jul 2021 - Nov 2021",
    techStack: ["React", "Next.js", "TypeScript", "Storybook"],
    image: {
      alt: CompanyName.CLASSING,
      imgSource: `/companies/${CompanyName.CLASSING}.png`,
    },
    link: "https://clasingelts.com/",
  },
  {
    name: CompanyName.DAG,
    description:
      "Domingo Alonso Group (DAG) is a vehicle importer from canary islands (Spain), they core business is importing and selling cars (Volkswagen, Audi, Škoda). They have an internal IT team to develop and mantain internal company applications.",
    position:
      "Developed a frontend application to handle and show documentation from Google Drive using React (Gatsby framework). As well as improve and maintain the company's internal Design System and Components Library (Vue v2/v3).",
    dates: "Dec 2021 - May 2022",
    techStack: ["React", "Gatsby", "TypeScript", "Vue", "Storybook"],
    image: {
      alt: CompanyName.DAG,
      imgSource: `/companies/${CompanyName.DAG}.png`,
    },
  },
];
