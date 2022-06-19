import { CompanyData, CompanyName } from "./types";

export const companies: CompanyData[] = [
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
];
