import { companies } from "./data";
import { CompanyName } from "./types";

export const getCompanyDataByName = (companyName: CompanyName) => {
  const companyData = companies.find((company) => company.name === companyName);

  if (!companyData) throw new Error(`Company does not exist: ${companyName}`);

  return companyData;
};
