import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hr from "./Hr";

const brandsDetails = [
  { name: "Apple", uri: "iphone.png" },
  { name: "Google", uri: "pixel.jpg" },
  //   { name: "Honor", uri: "honor.jpg" },
  { name: "Mi", uri: "mi.jpg" },
  { name: "Samsung", uri: "samsung.jpg" },
  //   { name: "Moto", uri: "moto.jpg" },
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

const BrandCarousel = () => {
  return (
    <>
      <Hr />
      <h1 className="text-center text-2xl text-yellow-600">
        Select Your Brand
      </h1>
      <div className="flex flex-wrap justify-center gap-6 p-4 ">
        {brandsDetails.map((brand) => {
          return (
            <div
              key={brand.name}
              className="flex flex-col items-center gap-2 transition duration-250 ease-out hover:ease-in-out hover:scale-105"
            >
              <Link
                href={`/collections/${brand.name.toLowerCase()}`}
                className="p-2 rounded-full border border-sky-100"
              >
                <Image
                  src={`/brand-logos/${brand.uri}`}
                  width={80}
                  height={80}
                />
              </Link>
              <p className="text-sky-800">{brand.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BrandCarousel;
