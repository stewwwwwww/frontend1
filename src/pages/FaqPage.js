import React from "react";
import StaticNavBar from "../components/StaticNavBar";
import FaqIntro from "../components/FaqIntro";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SimpleMap from "../components/SimpleMap";
import ScrollToTop from "../utils/ScrollToTop";
import { useLoaderData } from "react-router-dom";

const FaqPage = () => {
  const data = useLoaderData()
  return (
    <div>
      <ScrollToTop />
      <StaticNavBar />
      <FaqIntro />
      <FAQ data={data}/>
      <Contact />
      <SimpleMap />
      <Footer />

    </div>
  );
};

export default FaqPage;
