import React, { useState } from "react";

import {
  CAR_INSURANCE,
  CAR_LOGO,
  EV_PARKING,
  FAST_TAG,
  HEADER_LOGO,
  LEFT_ARROW,
  NEAR_PARKING,
  RIGHT_ARROW,
  ROAD_ASSISTANCE,
  TOLL_ESTIMATOR,
} from "../Utils/constant";

const Home = () => {
  const [show, setShow] = useState(false);
  const changeState = () => {
    setShow(!show);
  };
  return (
    <div className=" w-fit ">
      <div
        id="parent"
        className=" w-full h-[86px] bg-[#1a9e75] shadow-lg flex  relative z-0"
      >
        <img
          className=" h-16 ml-36 py-2 px-1 cursor-pointer "
          src={HEADER_LOGO}
          alt="LOGO"
        />
        <p className=" pl-12 px-3 py-6 text-center  text-green-200 font-medium  text-lg cursor-pointer  hover:text-white">
          About Us
        </p>
        <p className="  px-3 py-6 text-center text-green-200 font-medium  text-lg cursor-pointer  hover:text-white">
          Parking
        </p>
        <p className="  px-3 py-6 text-center text-green-200 font-medium  text-lg cursor-pointer  hover:text-white">
          Fastag
        </p>
        <p
          onClick={changeState}
          className=" flex  px-3 py-6 text-center text-green-200 font-medium  text-lg cursor-pointer  hover:text-white"
        >
          Products
          <img
            className=" w-3 ml-1 py-2  text-white"
            src="https://www.svgrepo.com/show/333912/down-arrow.svg"
            alt="down_arrow"
          />
        </p>
        <p className="  px-3 py-6 text-center text-green-200 font-medium  text-lg cursor-pointer hover:text-white ">
          Careers
        </p>
        <button className=" text-white border border-white h-12 my-3  px-10 rounded-lg  text-xl  ml-[350px] mt-4 hover:text-[#1a9e75] hover:bg-white">
          Login
        </button>
      </div>
      {show ? (
        <div className=" ml-[600px] my-[-26px] w-44 border rounded-lg  relative z-20 bg-white">
          <p className="pl-3 pt-2 text-lg  font-normal">Product 1</p>
          <p className="pl-3 pt-2 mb-3 text-lg font-normal">Product 2</p>
          <hr />
          <p className=" text-lg  pl-3 py-4 font-normal ">All Products</p>
        </div>
      ) : null}

      <div className=" flex z-0 ">
        <div className=" ml-40 mt-28  w-[1000px]">
          <h1 className=" text-3xl font-semibold">
            Simplify Your Car <br /> Experience with ParkQwik
          </h1>
          <p className=" my-6 font-bold text-lg">
            The Complete Parking App and Car Services Solution
          </p>
        </div>
        <div>
          <img
            className=" w-3/5 ml-[300px] my-5  "
            src={CAR_LOGO}
            alt="CAR_logo"
          />
        </div>
      </div>
      <div className=" flex">
        <img
          className=" w-12 h-12  ml-20 mt-24 mr-6"
          src={LEFT_ARROW}
          alt="left_arrow"
        />
        <div className="border rounded-xl mx-4">
          <div className="rounded-xl w-24 h-24 ml-10 shadow-xl border mx-9 ">
            <img className=" w-20  h-20  m-2  " src={FAST_TAG} alt="fast_tag" />
          </div>
          <p className="ml- mt-4 text-center font-bold text-lg ">
            Fastag Services
          </p>
        </div>
        <div className="border rounded-xl mx-4">
          <div className="rounded-xl w-24 h-24 ml-10 shadow-xl border mx-9 ">
            <img
              className=" w-20  h-20  m-2 "
              src={NEAR_PARKING}
              alt="fast_tag"
            />
          </div>
          <p className="ml- mt-4 text-center font-bold text-lg ">
            Nearby Parking
          </p>
        </div>
        <div className="border rounded-xl mx-4">
          <div className="rounded-xl w-24 h-24 ml-10 shadow-xl border mx-9 ">
            <img
              className=" w-20  h-20  m-2 "
              src={EV_PARKING}
              alt="fast_tag"
            />
          </div>
          <p className="ml- mt-4 text-center font-bold text-lg ">EV Parking</p>
        </div>
        <div className="border rounded-xl mx-4">
          <div className="rounded-xl w-24 h-24 ml-10 shadow-xl border mx-9 ">
            <img
              className=" w-20  h-20  m-2 "
              src={CAR_INSURANCE}
              alt="fast_tag"
            />
          </div>
          <p className="ml- mt-4 text-center font-bold text-lg ">
            Car Insurance
          </p>
        </div>
        <div className="border rounded-xl mx-4">
          <div className="rounded-xl w-24 h-24 ml-10 shadow-xl border mx-9 ">
            <img
              className=" w-20  h-20  m-2 "
              src={ROAD_ASSISTANCE}
              alt="fast_tag"
            />
          </div>
          <p className="ml- mt-4 text-center font-bold text-lg ">
            Road Assistance
          </p>
        </div>
        <div className="border rounded-xl mx-4">
          <div className="rounded-xl w-24 h-24 ml-10 shadow-xl border mx-9 ">
            <img
              className=" w-20  h-20  m-2 "
              src={TOLL_ESTIMATOR}
              alt="fast_tag"
            />
          </div>
          <p className="ml- mt-4 text-center font-bold text-lg ">
            Toll Estimator
          </p>
        </div>
        <img
          className="w-12 h-12  mt-24 ml-6 "
          src={RIGHT_ARROW}
          alt="right_arrow"
        />
      </div>
    </div>
  );
};

export default Home;
