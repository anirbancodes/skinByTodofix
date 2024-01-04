import Link from "next/link";
import React from "react";
import { IoBagOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex justify-between px-5 py-2 items-center">
      <Link className=" text-sky-700 text-3xl" href={"/"}>
        SKIN
      </Link>
      <div className="flex gap-6">
        <Link
          className="text-cyan-700 px-5 py-1 rounded-md hover:text-sky-600 hover:bg-sky-50"
          href={"/"}
        >
          Mobile Skin
        </Link>
        <Link
          className="text-cyan-700 px-5 py-1 rounded-md hover:text-sky-600 hover:bg-sky-50"
          href={"/"}
        >
          Laptop Skin
        </Link>
      </div>
      <div className="flex items-center space-x-2 ">
        <input
          className="outline-none border-2 rounded-md border-sky-100 px-3 py-1 w-44 focus:text-sky-700 focus:border-sky-300 caret-pink-500"
          type="text"
          placeholder="type anything ..."
        />
        <button className="bg-sky-50 px-5 py-1.5 rounded-lg text-sky-600 hover:bg-sky-100">
          Search
        </button>
      </div>
      <div className="flex gap-1 items-center">
        <div className="p-2 rounded-full cursor-pointer hover:bg-sky-50">
          <IoBagOutline size={28} className="ad-fill-blue" />
        </div>
        <div className="p-2 rounded-full cursor-pointer hover:bg-sky-50">
          <RxAvatar size={30} className="ad-fill-blue " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
