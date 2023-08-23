import axios from 'axios';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import React, { useEffect, useState } from 'react';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get(
          "https://openapi.programming-hero.com/api/phones?search=iphone"
        )
       .then(data=>{
        const loadedData= data.data.data;
        console.log(loadedData)
        const phonesData=loadedData.map(phone=>{
            const parts= phone.slug.split("-")
            const price=parseInt(parts[1]);
            // console.log(price)
            const phoneInfo = {
              name: phone.phone_name,
              price: price/10,
              image: phone.image,
            };
            return phoneInfo;
            
        });
        // console.log(phonesData);
        setPhones(phonesData);
       })
    }, []);
    return (
      <div>
        <BarChart width={1000} height={700} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
        </BarChart>
      </div>
    );
};

export default PhoneBar;