import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [marks, setMarks] = useState([]);
  useEffect( () => {
    const fetchData = async () => {
      const res = await fetch("studentMarks.json");
      const data = await res.json();
      console.log(data)
      setMarks(data);
    }
    fetchData();
    console.log(marks)
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={marks}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="physics"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Dashboard;
