import React from "react";
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex-center w-full h-screen">
      <div className="flex flex-col gap-y-5">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          strokeColor="#e11d48"
          strokeWidth="6"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p className="font-bold text-xl">please wait</p>
      </div>
    </div>
  );
}
