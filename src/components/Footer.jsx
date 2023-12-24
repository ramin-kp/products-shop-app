import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full h-20 p-5 my-5 bg-slate-400 text-white font-bold text-3xl text-center rounded-lg">
      develope by
      <span className="ml-2.5 text-rose-700">
        <Link to="https://t.me/ramin_kp81">ramin._kp</Link>
      </span>
    </div>
  );
}
