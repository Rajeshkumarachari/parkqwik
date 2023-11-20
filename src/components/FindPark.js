import React from "react";
import { INDIA_MAP, SEARCH_LOGO } from "../Utils/constant";

const FindPark = () => {
  return (
    <div className="my-20 flex  w-fit ">
      <div className=" w-1/2 mt-20">
        <div className="">
          <p className=" text-3xl ml-40">
            Find and Reserve <br /> Parking Anywhere
          </p>
          <p className=" text-lg ml-40 mt-7">
            Easily find nearby parking spaces by entering <br /> your address or
            selecting your location
          </p>
        </div>
        <div className="flex mt-8 ml-44">
          <input
            className="border border-green-700 px-5 py-2 text-xl rounded-md"
            type="text"
            placeholder="Enter the location
          "
          />
          <button className=" bg-green-900 text-white mx-3 border-none px-5 py-2 rounded-md shadow-xl flex">
            <img
              className=" w-5 mt-1 mr-2"
              src={SEARCH_LOGO}
              alt="search_button_logo"
            />
            SEARCH
          </button>
        </div>
      </div>
      <div>
        <img className="w-[450px] ml-16" src={INDIA_MAP} alt="map_logo" />
      </div>
    </div>
  );
};

export default FindPark;
