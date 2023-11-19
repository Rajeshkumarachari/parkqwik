import React from "react";
import { APP_STORE_, GOOGLE_PLAY, PARKQWIK_APP } from "../Utils/constant";

const DownloadPark = () => {
  return (
    <div className="my-32  flex">
      <div className=" pl-60 w-1/2">
        <h2 className=" text-3xl font-semibold">Download ParkQwik</h2>
        <p className=" text-xl">
          By downloading ParkQwik, you gain access to a <br /> world of seamless
          parking experiences and car <br /> services right at your fingertips
        </p>
        <img
          className=" w-[240px] my-8 "
          src={APP_STORE_}
          alt="parkqik_app_Store_logo"
        />
        <img className="my-4" src={GOOGLE_PLAY} alt="playstore_app_logo" />
      </div>
      <div className="w-1/2 ">
        <img className="h-[400px] " src={PARKQWIK_APP} alt="applogo" />
      </div>
    </div>
  );
};

export default DownloadPark;
