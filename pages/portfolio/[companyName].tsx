/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Common.module.css";
import { Card } from "@nextui-org/react";
import { getCompanyDataByName } from "./utils";
import { CompanyData, CompanyName } from "./utils/types";
import { FloatingBackButton } from "../../components/FloatingBackButton";

export type PortfolioCompanyProps = {
  name: string;
  data: CompanyData;
};

const PortfolioCompany: NextPage<PortfolioCompanyProps> = ({ name, data }) => {
  return (
    <div>
      <Head>
        <title>Alberto Ruiz: {name}</title>
      </Head>

      <main className={styles.main}>
        <FloatingBackButton cta="Portfolio" to="/portfolio" />

        <Card>
          <img
            src={data.image.imgSource}
            alt={data.image.alt}
            className={styles.imageLarge}
          />

          <h1 className={styles.title}>{name}</h1>
        </Card>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { companyName: CompanyName.CODEOSCOPIC } },
      { params: { companyName: CompanyName.WONDO } },
      { params: { companyName: CompanyName.BBVA } },
      { params: { companyName: CompanyName.DAG } },
      { params: { companyName: CompanyName.CLASSING } },
      { params: { companyName: CompanyName.TRIVE } },
      { params: { companyName: CompanyName.LIBEEN } },
    ],
    fallback: false,
  };
}

type PortfolioCompanyGetStaticProps = { params: { companyName: CompanyName } };

export async function getStaticProps({
  params,
}: PortfolioCompanyGetStaticProps) {
  const data: CompanyData = getCompanyDataByName(params.companyName);

  return { props: { name: params.companyName, data } };
}

export default PortfolioCompany;
