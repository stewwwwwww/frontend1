import React from "react";
import video from "../assets/introVideo.mp4";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import { LanguageContext } from "../App.js";
import { useContext, useEffect } from "react";
const Intro = ({ onVideoLoaded }) => {
  const { languageContext } = useContext(LanguageContext);
  const animateRef = useAnimateContainer();
  useEffect(() => {
    const videoElement = document.querySelector("video");

    // Ensuring the video plays inline and does not show the play button on Safari
    if (videoElement) {
      videoElement.setAttribute("webkit-playsinline", "");
      videoElement.setAttribute("playsinline", "");

      // Remove play button overlay
      videoElement.addEventListener("play", function () {
        this.style.objectFit = "cover";
      });
    }
  }, []);
  // Video load event handler
  const handleVideoLoaded = () => {
    onVideoLoaded(true); // Notify the parent component that the video has loaded
  };
  return (
    <div className="relative mb-[3.75rem] flex items-center lg:justify-center">
      <video
        loop
        preload="auto"
        muted
        playsInline
        autoPlay
        className="relative h-[46.5rem] w-auto min-w-full object-cover brightness-75
        lg:h-[53.5rem] 2xl:h-[61.5rem]"
        onCanPlayThrough={handleVideoLoaded}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div
        className="absolute z-10 flex max-w-[75rem]  flex-col 
        items-center justify-center gap-7 px-4 lg:w-full 
        lg:items-start lg:text-start"
        ref={animateRef}
      >
        <h6 className="text-white">
          {languageContext === "english"
            ? "Green Products for Viet Families"
            : "Dược Xanh Cho Sức Khỏe Mọi Nhà"}
        </h6>
        <h1 className="max-w-[48rem] text-white">
          {languageContext === "english"
            ? "Phuong Minh Pharma"
            : "Dược Phương Minh"}
        </h1>
        <div className="h-[0.0625rem] w-[90%] bg-[#838b93] md:w-[630px]"></div>
        <p className="text-white lg:w-[24rem]">
          {languageContext === "english"
            ? "Import and distribute Medicines, Supplements, and Cosmetics from top manufacturers in Europe. All products have been researched and clinically proven about efficacy and efficiency"
            : "Chuyên nhập khẩu, phân phối Thuốc, Thực Phẩm Chức Năng, Mỹ Phẩm của các hãng dược hàng đầu Châu Âu. Tất cả sản phẩm ddeuf được nghiên cứu lâm sàng về hiệu quả điều trị và tính an toàn."}
        </p>
      </div>
    </div>
  );
};

export default Intro;
