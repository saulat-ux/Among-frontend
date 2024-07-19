import React from "react";
import BasicTabs from "../components/Tabs/Tab";
import Layout from "../components/Layout";
import { Suspense } from "react";
import Footer from "../components/footer/footer";

const searchResults = () => {
  return (
    <div>
      <Layout>
        <Suspense>
          <BasicTabs />
        </Suspense>
      </Layout>
    </div>
  );
};

export default searchResults;
