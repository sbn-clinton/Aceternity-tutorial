import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className=" w-full absolute left-0 -bottom-72">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className=" w-full h-full opacity-100"
        />
      </div>
      <div className=" flex flex-col items-center ">
        <h1 className=" heading lg:max-w-[45vw]">
          Ready to take <span className=" text-purple">your</span> presence to
          the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          laborum quas expedita!
        </p>
        <a href="/" className="">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className=" flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className=" md:text-base text-sm md:text-normal  font-light">
          Copyright © 2024 SBN
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className=" w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 i"
            >
              <img
                src={profile.img}
                alt="profile.id"
                className=""
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
