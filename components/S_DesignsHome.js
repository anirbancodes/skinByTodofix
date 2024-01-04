import React from "react";
import DesignCard from "./S_DesignCard";
import Hr from "./Hr";

let designs = [
  { name: "Cyberhead", uri: "cyberhead.webp", price: 499 },
  { name: "Cybermind", uri: "cybermind.webp", price: 499 },
  { name: "Golden Swirl", uri: "golden-swirl.webp", price: 499 },
  { name: "Magma", uri: "magma.webp", price: 499 },
];

const DesignsHome = () => {
  return (
    <>
      <Hr />
      <h1 className="text-center text-2xl text-yellow-600">Featured Skins</h1>
      <div className="px-5 mt-4 flex flex-wrap gap-5 justify-center">
        {designs.map((design) => {
          return (
            <DesignCard
              key={design.name}
              name={design.name}
              price={design.price}
              uri={`/skin/show/${design.uri}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default DesignsHome;
