import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ prices }) => {
  return (
    <div className="mt-12 bg-indigo-400 p-6 rounded-md flex flex-col">
      <div className="text-center">
        <h2 className="text-2xl font-bold">{prices.name}</h2>
        <h2 className="text-xl ">{prices.price}</h2>
      </div>
      <p className="text-lg text-blue-900 font-bold">Features: </p>
      {prices.features.map((feature, idx) => (
        <Feature key={idx} feature={feature} />
      ))}
      <button className="text-white bg-green-600 hover:bg-green-700 p-2 w-full rounded-md mt-auto">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
