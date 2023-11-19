import React, { useState } from "react";
import { LEFT_DESIGN } from "../Utils/constant";

const Question = () => {
  const [show, setShow] = useState(false);

  const changeToggle = () => {
    setShow(!show);
  };

  return (
    <div className="my-20   text-center ">
      <h2 className=" text-center text-4xl font-semibold">
        Frequently Asked Questions
      </h2>
      <div
        onClick={changeToggle}
        className="flex border shadow-lg  text-center h-10 pl-1/3 my-6 cursor-pointer"
      >
        <p className=" text-center pl-[600px] text-lg">
          Can I reserve a parking spot in advance?
        </p>
        <img className=" w-5" src={LEFT_DESIGN} alt="" />
      </div>
      {show ? (
        <div>
          <p className=" text-lg">
            Yes, you can book your parking space in advance. You can choose{" "}
            <br /> the date and time when you need your parking space.
          </p>
        </div>
      ) : null}

      <div className="flex border shadow-lg  text-center h-10 pl-1/3 my-6 cursor-pointer">
        <p className=" text-center pl-[600px] text-lg">
          Can I cancel my parking reservation?
        </p>
        <img className=" w-5" src={LEFT_DESIGN} alt="" />
      </div>
      {show ? (
        <div>
          <p className=" text-lg">
            Yes, you can cancel your parking reservation before your allotted{" "}
            <br />
            time by calling our customer support number.
          </p>
        </div>
      ) : null}

      <div
        onClick={changeToggle}
        className="flex border shadow-lg  text-center h-10 pl-1/3 my-6 cursor-pointer"
      >
        <p className=" text-center pl-[600px] text-lg">
          Can I reserve a parking spot in advance?
        </p>
        <img className=" w-5" src={LEFT_DESIGN} alt="" />
      </div>
      {show ? (
        <div>
          <p className=" text-lg">
            Yes, you can book your parking space in advance. You can choose{" "}
            <br /> the date and time when you need your parking space.
          </p>
        </div>
      ) : null}

      <div
        onClick={changeToggle}
        className="flex border shadow-lg  text-center h-10 pl-1/3 my-6 cursor-pointer"
      >
        <p className=" text-center pl-[600px] text-lg">
          Can I reserve a parking spot in advance?
        </p>
        <img className=" w-5" src={LEFT_DESIGN} alt="" />
      </div>
      {show ? (
        <div>
          <p className=" text-lg">
            Yes, you can book your parking space in advance. You can choose{" "}
            <br /> the date and time when you need your parking space.
          </p>
        </div>
      ) : null}

      <div
        onClick={changeToggle}
        className="flex border shadow-lg  text-center h-10 pl-1/3 my-6 cursor-pointer"
      >
        <p className=" text-center pl-[600px] text-lg">
          Can I reserve a parking spot in advance?
        </p>
        <img className=" w-5" src={LEFT_DESIGN} alt="" />
      </div>
      {show ? (
        <div>
          <p className=" text-lg">
            Yes, you can book your parking space in advance. You can choose{" "}
            <br /> the date and time when you need your parking space.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Question;
