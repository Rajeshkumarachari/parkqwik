import React from "react";
import {
  ADDRESS_LOGO,
  CALL,
  FACEBOOK_LOGO,
  GMAIL_LOGO,
  HEADER_LOGO,
  INSTAGRAM_LOGO,
  LINKEDIN_LOGO,
  TWITTER_LOGO,
} from "../Utils/constant";

const Footer = () => {
  return (
    <div className=" bg-[#1a9e75] text-white w-full border border-red-800">
      <div className="my-10 block md:flex">
        <div className=" w-full md:w-1/4 my-8 py-10 mx-10 ">
          <img className=" w-40" src={HEADER_LOGO} alt="parkqwik_logo" />
          <p className=" text-lg">
            The Complete Parking App and <br /> Car Services Solution
          </p>
          <h1 className=" text-3xl font-semibold my-4">Follow Us</h1>
          <div className="flex">
            <img
              className="w-8 rounded-lg mx-2 cursor-pointer "
              src={FACEBOOK_LOGO}
              alt=""
            />
            <img
              className="w-8 rounded-lg mx-2 cursor-pointer"
              src={LINKEDIN_LOGO}
              alt=""
            />
            <img
              className="w-8 rounded-lg mx-2 cursor-pointer"
              src={INSTAGRAM_LOGO}
              alt=""
            />
            <img
              className="w-8 rounded-lg mx-2 cursor-pointer"
              src={TWITTER_LOGO}
              alt=""
            />
          </div>
        </div>

        <div className="w-[220px] mx-20 md:mx-10  my-10">
          <h1 className=" text-3xl font-semibold">Quick Links</h1>
          <p className=" my-2 text-lg font-medium">About Us</p>
          <p className=" my-2 text-lg font-medium">Blogs</p>
          <p className=" my-2 text-lg font-medium">Newsletters</p>
          <p className=" my-2 text-lg font-medium">Help & Support</p>
          <p className=" my-2 text-lg font-medium">Careers</p>
        </div>

        <div className="w-[200px] mx-20 md:mx-0 my-10">
          <h1 className=" text-3xl font-semibold">Products</h1>
          <p className=" my-2 text-lg font-medium">Fastag Services</p>
          <p className=" my-2 text-lg font-medium">Nearby Parking</p>
          <p className=" my-2 text-lg font-medium">EV Parking</p>
          <p className=" my-2 text-lg font-medium">Rentout Helmet</p>
          <p className=" my-2 text-lg font-medium">Road Assistance</p>
          <p className=" my-2 text-lg font-medium">Car Insurance</p>
          <p className=" my-2 text-lg font-medium">Shop</p>
        </div>

        <div className="w-[400px] md:mx-0 my-10 mx-20 ">
          <h1 className=" text-3xl font-semibold">Reach Us</h1>
          <div className="flex">
            <img className="w-7 rounded-lg mr-3" src={GMAIL_LOGO} alt="" />
            <p className=" text-lg">info@parkqwik.com</p>
          </div>
          <div className="flex my-2">
            <img className="w-7 mr-3 rounded-lg" src={CALL} alt="" />
            <p className=" text-lg"> 80565 28565</p>
          </div>
          <div className="flex">
            <img
              className="w-7 h-7 mr-3 rounded-lg"
              src={ADDRESS_LOGO}
              alt=""
            />
            <p className=" text-lg">
              Level 7, IIFL Towers, 143,MGR Main Road, Perungudi, Chennai 96.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center py-4 text-xl">
          © 2023 Parkqwik. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
