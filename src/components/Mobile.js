import React from "react";
import {
  ARROW_WORKING,
  CAR,
  LOCATION,
  MOBILE_MAP,
  NOTIFICATION,
} from "../Utils/constant";

const Mobile = () => {
  return (
    <div className=" mt-40  w-fit ">
      <div className=" block md:flex">
        <div className="   ml-56  w-[500px]  mt-20">
          <h3 className=" font-semibold text-4xl">Parking is easy with us</h3>
          <p className=" mt-8 text-lg  font-normal ">
            ParkQwik helps you to find, reserve, and pay <br /> for parking
            <br /> spaces in a few taps. Say goodbye to <br />
            endless searching <br />
            and wasted time.
          </p>
        </div>
        <div className=" ml-52 md:ml-6 ">
          <img className="w-[450px] " src={MOBILE_MAP} alt="" />
        </div>
      </div>
      <div className="mt-20">
        <p className=" text-center text-4xl font-medium">How it works</p>
        <div className="block md:flex">
          <div className=" mx-20   w-72">
            <img
              className=" w-24  items-center mx-24"
              src={LOCATION}
              alt="location"
            />
            <p className=" text-lg text-center">
              You ll receive directions to the <br /> space <br /> and
              information on how to <br /> access
            </p>
          </div>
          <div>
            <img
              className=" ml-40 md:ml-0 my-24 md:my-20 w-20"
              src={ARROW_WORKING}
              alt="working arrow"
            />
          </div>

          <div className=" mx-20   w-72">
            <img
              className=" w-24  items-center mx-24"
              src={NOTIFICATION}
              alt="location"
            />
            <p className=" text-lg text-center">
              The space owner/car park <br /> is notified <br /> of your
              bookings
            </p>
          </div>
          <div>
            <img
              className=" ml-40 md:ml-0 my-24 md:my-20 w-20"
              src={ARROW_WORKING}
              alt="working arrow"
            />
          </div>

          <div className=" mx-20   w-72">
            <img
              className=" w-24  items-center mx-24"
              src={CAR}
              alt="location"
            />
            <p className=" text-lg text-center">
              Just turn up, park your vehicle <br /> and <br /> get on with your
              day!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
