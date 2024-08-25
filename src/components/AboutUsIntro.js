import React from "react";
import pic from "../assets/research.jpg";
const AboutUsIntro = () => {
  return (
    <div className="flex flex-col items-center gap-16 gap-24 px-4 md:gap-20 xl:gap-24">
      <div className=" flex max-w-[75rem]  flex-col pt-24 text-center md:pt-32 lg:pt-44">
        <div className="xl-gap-7 flex flex-col justify-between gap-10 md:gap-12 lg:flex-row lg:gap-24">
          <div className="flex flex-col gap-5 lg:text-start">
            <h6 className="text-[#00378A]">About Us</h6>
            <h1>Learn More About Our Company</h1>
          </div>
          <div className="flex items-end lg:w-[33%]">
            <p className=" text-[#838B93] lg:text-end">
              Discover the dedicated and highly skilled professionals who make
              up our medical laboratory team. With a shared commitment to
              precision and quality, our experts bring a wealth of experience in
              various specialized fields, including pathology, and molecular
              diagnostics.
            </p>
          </div>
        </div>
      </div>
      <img
        src={pic}
        className="lg: h-[25rem] w-full rounded-xl object-cover sm:h-[19rem] md:h-[31rem] md:h-[32.5rem] xl:max-w-[75rem]"
      />
      <div className="flex flex-col items-center max-w-[75rem] text-center">
        <h6 className="text-[#00378A]">Our Mission</h6>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pretium hendrerit nunc non viverra. Nulla ipsum felis, suscipit in
          dolor sit amet, porttitor pulvinar lectus. Aliquam et sem eget.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium
          hendrerit nunc non viverra. Nulla ipsum felis, suscipit in dolor sit
          amet, porttitor pulvinar lectus. Aliquam et sem eget.
        </h2>
      </div>
    </div>
  );
};

export default AboutUsIntro;
