import { useState } from "react";
import { LEFT_DESIGN } from "../Utils/constant";

const Question = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [make, setMake] = useState(false);
  const [poll, setPoll] = useState(false);

  const onChange = () => {
    setShow(!show);
  };
  const onPark = () => {
    setOpen(!open);
  };

  const advance = () => {
    setClose(!close);
  };
  const mass = () => {
    setMake(!make);
  };
  const shadow = () => {
    setPoll(!poll);
  };

  return (
    <div className="my-20   text-center  w-fit  ">
      <h2 className=" text-center sm:text-center text-4xl font-semibold">
        Frequently Asked Questions
      </h2>
      <div
        onClick={onChange}
        className="flex border shadow-lg mx-4 sm:mx-96  text-center h-10 pl-1/3 my-6 cursor-pointer"
      >
        <p className=" text-center  pl-10 sm:pl-48 text-lg">
          Can I reserve a parking spot in advance? {show ? "-" : "+"}
        </p>
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
        onClick={onPark}
        className="flex border shadow-lg mx-4 sm:mx-96  text-center h-10 pl-1/3 my-6 cursor-pointer"
      >
        <p className=" text-center  pl-10 sm:pl-48 text-lg">
          Can I cancel my parking reservation? {open ? "-" : "+"}
        </p>
      </div>
      {open ? (
        <div>
          <p className=" text-lg">
            Yes, you can cancel your parking reservation before your allotted{" "}
            <br />
            time by calling our customer support number.
          </p>
        </div>
      ) : null}
      <div
        onClick={advance}
        className="flex border shadow-lg mx-4 sm:mx-96 text-center h-10 pl-1/3 my-6 cursor-pointer"
      >
        <p className=" text-center  pl-10 sm:pl-48 text-lg">
          Does ParkQwik operate in multiple cities? {close ? "-" : "+"}
        </p>
      </div>
      {close ? (
        <div>
          <p className=" text-lg">
            Yes, we operate in all metro cities and the cities around them.
          </p>
        </div>
      ) : null}
      <div
        onClick={mass}
        className="flex border shadow-lg mx-4 sm:mx-96 text-center h-10 pl-1/3 my-6 cursor-pointer"
      >
        <p className=" text-center  pl-10 sm:pl-48 text-lg">
          How can I extend my parking reservation ? {make ? "-" : "+"}
        </p>
      </div>
      {make ? (
        <div>
          <p className=" text-lg">
            You can either rebook or contact customer support to extend your
            parking.
          </p>
        </div>
      ) : null}

      <div
        onClick={shadow}
        className="flex border shadow-lg  mx-4 sm:mx-96  text-center h-10 pl-1/3 my-6 cursor-pointer"
      >
        <p className=" text-center pl-10 sm:pl-48 text-lg">
          Do you offer valet parking service? {poll ? "-" : "+"}
        </p>
      </div>
      {poll ? (
        <div>
          <p className=" text-lg">
            Yes, we do offer valet parking services. You can reach out to our{" "}
            <br />
            customer support number at 842 842 88 33 to book your valet parking.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Question;
