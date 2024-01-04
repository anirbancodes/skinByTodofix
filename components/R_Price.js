import Image from "next/image";
import React from "react";

const whyChooseUs = [
  {
    uri: "/icons/pay-after-service.svg",
    text: "Pay after Service",
  },
  {
    uri: "/icons/6-month-warranty.svg",
    text: "6 months Warranty",
  },
  {
    uri: "/icons/certified-parts.svg",
    text: "Certified Parts",
  },
];

const R_Price = () => {
  return (
    <div className="flex flex-col w-full px-4 py-3">
      <h1 className="text-3xl">todofix</h1>
      <div className="bg-[#ebe8d8] text-[#3a6b64] px-6 py-5 flex flex-col gap-5 rounded-xl mt-3">
        {/* <div className="border-slate-200 border text-[#6fbaae] px-6 py-5 flex flex-col gap-5 rounded-xl mt-3"> */}
        <h2 className="text-lg text-cyan-800">Why Choose Us ?</h2>
        <div className="flex  justify-around">
          {whyChooseUs.map((item) => {
            return (
              <div key={item.uri} className="flex flex-col items-center gap-3">
                <Image
                  width={30}
                  height={30}
                  src={item.uri}
                  className="ad-fill-green"
                />
                <p className="text-md">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#ebe8d8] text-[#3a6b64] px-6 py-5 flex flex-col gap-5 rounded-xl mt-3">
        <select className="flex gap-3">
          <option disabled value={"Choose"} selected>
            Choose Location
          </option>
          <option value={"Alipurduar"}>Alipurduar</option>
          <option value={"Bongaigaon"}>Bongaigaon</option>
        </select>
      </div>
    </div>
  );
};

export default R_Price;
