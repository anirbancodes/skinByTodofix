import Image from "next/image";
import Link from "next/link";
import React from "react";
const brandsDetails = [
  { name: "Apple", uri: "iphone.png" },
  { name: "Google", uri: "pixel.jpg" },
  { name: "Honor", uri: "honor.jpg" },
  { name: "Mi", uri: "mi.jpg" },
  { name: "Samsung", uri: "samsung.jpg" },
  { name: "Moto", uri: "moto.jpg" },
  { name: "IQOO", uri: "iqoo.jpg" },
  { name: "Vivo", uri: "vivo.jpg" },
  //   { name: "Infinix", uri: "infinix.svg" },
  { name: "Oppo", uri: "oppo.jpg" },
  { name: "Poco", uri: "poco.jpg" },
  { name: "Nokia", uri: "nokia.jpg" },
  { name: "OnePlus", uri: "oneplus.jpg" },
  { name: "Nothing", uri: "nothing.jpg" },
  //   { name: "Tecno", uri: "tecno.svg" },
];

const Carousel = () => {
  return (
    // <div className="overflow-hidden  w-1/2 gap-2 p-3 border border-slate-200 rounded-xl">
    <div className="w-1/2 border border-slate-200 rounded-xl">
      {/* <nav className="grid grid-flow-col py-8 px-2 gap-x-4 overflow-x-scroll overflow-y-hidden border border-slate-200 rounded-xl"> */}
      <nav className="grid grid-flow-col gap-x-4 overflow-y-auto overscroll-x-contain snap-mandatory snap-x">
        {brandsDetails.map((brand) => {
          return (
            <Link key={brand.uri} href="#image-1" className="p-0 rounded-full">
              <Image
                src={`/brand-logos/${brand.uri}`}
                width={200}
                height={200}
                className="border border-slate-200 rounded-full object-contain [transition:0.3s_ease_all] hover:scale-105"
              />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Carousel;
