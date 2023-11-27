import React from "react";
import { CUSTOMER_ONE, CUSTOMER_THREE, CUSTOMER_TWO } from "../Utils/constant";

const HappyCustomers = () => {
  return (
    <div className="my-20  w-fit   ">
      <h1 className=" text-center text-4xl font-semibold ">
        Our Happy Customers
      </h1>
      <div className="block md:flex mt-20">
        <div className=" my-20 md:my-0 mx-10 md:mx-[-40px] ">
          <img
            className=" w-[350px] h-[480px] ml-28 rounded-xl shadow-2xl opacity-90 z-0 relative"
            src={CUSTOMER_ONE}
            alt="first_customer"
          />
          <div className="w-[300px] border z-10  h-44 relative mt-[-200px]  mx-32 bg-gray-100 opacity-70 rounded-lg ">
            <h1 className=" text-lg font-bold ">
              My car looks absolutely shiny every morning.
            </h1>
            <p className=" text-sm  text-gray-500">
              I tried ParkQwik car wash service on the recommendation of a
              friend, and there has been no looking back since then.
            </p>
            <p className="text-lg text-right mr-2">Jessica</p>
          </div>
        </div>

        <div className=" my-20 md:my-0 mx-10 md:mx-[-40px]">
          <img
            className=" w-[350px] h-[480px]  mx-24 rounded-xl shadow-2xl opacity-90 z-0 relative"
            src={CUSTOMER_TWO}
            alt="first_customer"
          />
          <div className="w-[300px] border z-10  h-44 relative mt-[-200px]  mx-32 bg-gray-100 opacity-70 rounded-lg ">
            <h1 className=" text-lg font-bold ">
              ParkQwik is the best parking app I've used so far
            </h1>
            <p className=" text-sm  text-gray-500">
              I can quickly check for open spots and secure one with ease. The
              convenience is unmatched.
            </p>
            <p className="text-lg text-right mr-2">Kumar</p>
          </div>
        </div>

        <div className=" my-20 md:my-0 mx-10 md:mx-[-40px]">
          <img
            className=" w-[350px] h-[480px]  mx-24 rounded-xl shadow-2xl opacity-90 z-0 relative"
            src={CUSTOMER_THREE}
            alt="first_customer"
          />
          <div className="w-[300px] border z-10  h-44 relative mt-[-200px]  mx-32 bg-gray-100 opacity-70 rounded-lg ">
            <h1 className=" text-lg font-bold ">
              Had a great experience with ParkQwik.
            </h1>
            <p className=" text-sm  text-gray-500">
              ParkQwik has been a lifesaver in urban areas with limited parking
              options. I no longer waste time driving around aimlessly.
            </p>
            <p className="text-lg text-right mr-2">Charle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
