import React, { useEffect, useState } from "react";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch(prices.json)
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-bold text-5xl text-purple-900 bg-purple-300">
        Awesome prices
      </h2>
    </div>
  );
};

export default PriceList;
