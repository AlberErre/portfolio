import { CompanyData, CompanyName } from "./types";

export const companies: CompanyData[] = [
  {
    name: CompanyName.CODEOSCOPIC,
    description:
      "Building and defining an entire frontend for a real-time insurance pricing provider ⛑. Working directly with CTO and getting involved in product decision making.",
    dates: "Jun 2019 - Aug 2020",
    techStack: ["React", "TypeScript", "Redux", "Formik", "Jest"],
    image: {
      alt: CompanyName.CODEOSCOPIC,
      imgSource: `/companies/${CompanyName.CODEOSCOPIC}.svg`,
    },
  },
];
