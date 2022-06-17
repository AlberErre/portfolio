export enum CompanyName {
  CODEOSCOPIC = "codeoscopic",
  WONDO = "wondo",
  BBVA = "bbva",
  DAG = "dag",
  CLASSING = "classing",
  TRIVE = "trive",
  LIBEEN = "libeen",
}

export type CompanyData = {
  name: string;
  description: string;
  techStack: string[];
  dates: string;
  image: CompanyImageData;
  link?: string;
};

export type CompanyImageData = {
  alt: string;
  imgSource: string;
};
