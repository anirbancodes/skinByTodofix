import Image from "next/image";
import React from "react";

const DesignCard = ({ uri, name, price }) => {
  return (
    <div className="flex flex-col gap-3 w-56 border rounded-xl border-slate-200 py-2 px-5 hover:scale-105 transition duration-300 ease-out hover:ease-in cursor-pointer hover:border-sky-200 hover:text-yellow-600">
      <Image src={uri} width={240} height={200} />
      <hr className="border border-sky-50" />
      <div className="flex justify-between">
        <p className="text-sky-700 hover:text-yellow-600">{name}</p>
        <p className="text-sky-600  hover:text-yellow-600">₹{price}</p>
      </div>
    </div>
  );
};

export default DesignCard;
