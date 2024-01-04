import React from "react";
import { PiPackageDuotone } from "react-icons/pi";
import { FaShippingFast } from "react-icons/fa";
import { PiClockClockwiseLight } from "react-icons/pi";

const SiteFeatures = () => {
  return (
    <div className="pt-16 pb-12 flex justify-around flex-wrap">
      <div className="flex flex-col px-6 py-3 rounded-xl items-center w-64 border border-transparent hover:border-sky-100">
        <PiPackageDuotone size={60} className="ad-fill-blue mb-3" />
        <h1 className="mb-2 text-xl text-sky-800">Same Day Dispatch</h1>
        <p className="text-sky-700">
          All orders placed before 12pm Monday to Friday are dispatched same
          day.
        </p>
      </div>
      <div className="flex flex-col px-6 py-3 rounded-xl items-center w-64 border border-transparent hover:border-sky-100">
        <FaShippingFast size={60} className="ad-fill-blue mb-3" />
        <h1 className="mb-2 text-xl text-sky-800">Free & Fast Delivery</h1>
        <p className="text-sky-700">
          Orders to metro cities reach in 2-3 working days.
        </p>
      </div>
      <div className="flex flex-col px-6 py-3 rounded-xl items-center w-64 border border-transparent hover:border-sky-100">
        <PiClockClockwiseLight size={60} className="ad-fill-blue mb-3" />
        <h1 className="mb-2 text-xl text-sky-800">Cancellation Policy</h1>
        <p className="text-sky-700">
          Easy cancellation from the dashboard within 12 hours of placing the
          order.
        </p>
      </div>
    </div>
  );
};

// const feature = (icon, heading, details) => {
//   return (
//     <div className="flex flex-col align-center">
//       <PiPackageDuotone size={30} className="ad-fill-blue " />
//     </div>
//   );
// };

export default SiteFeatures;
