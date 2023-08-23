import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";
import Dashboard from "../Dashboard/Dashboard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="mx-12">
      <h2 className="text-center text-bold text-5xl text-purple-900 bg-purple-300">
        Affordable Pricing
      </h2>
      <div className="grid md:grid-cols-3 gap-3">
        {prices.map((price) => (
          <PriceCard key={price.id} prices={price}></PriceCard>
        ))}
      </div>
      
    </div>
  );
};

export default PriceList;
