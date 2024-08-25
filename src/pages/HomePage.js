import React from "react";

import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import About from "../components/About";
import Technology from "../components/Technology";
import Products from "../components/Products";
import Research from "../components/Research";
import Contact from "../components/Contact";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/ScrollToTop";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const data = useLoaderData();

  // Handler to update the state when the video is loaded
  const handleVideoLoaded = (loaded) => {
    setIsVideoLoaded(loaded);
  };

  return (
    <div>
      <ScrollToTop />
      <NavBar />

      <Intro className="hidden" onVideoLoaded={handleVideoLoaded} />

      {!isVideoLoaded && (
        <div className="flex h-screen items-center justify-center">
          <p>Loading...</p>
        </div>
      )}

      {isVideoLoaded && (
        <>
          <NavBar />
          <Intro onVideoLoaded={handleVideoLoaded} />
          <About />
          <Technology />
          {data && <Research data={data.research} />}
          {data && <Products data={data.product} />}
          <Contact />
          {data && <Articles data={data.article} />}
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
