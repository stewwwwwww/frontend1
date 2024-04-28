import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ResearchDetails from "../components/ResearchDetails";
import Contact from "../components/Contact";
import { useLoaderData } from "react-router-dom";

const ResearchDetailPage = () => {
  const data = useLoaderData();
  return data ? (
    <div>
      <NavBar />
      <ResearchDetails data={data} />
      <Contact />
      <Footer />
    </div>
  ) : (
    <></>
  );
};

export default ResearchDetailPage;
