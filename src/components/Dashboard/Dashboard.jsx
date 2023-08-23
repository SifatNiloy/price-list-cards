import React from 'react';
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
    const studentMarks = [
      {
        id: 1,
        name: "John",
        physics: 100,
        chemistry: 95,
        math: 85,
      },
      {
        id: 2,
        name: "Emily",
        physics: 78,
        chemistry: 92,
        math: 88,
      },
      {
        id: 3,
        name: "Michael",
        physics: 85,
        chemistry: 76,
        math: 93,
      },
      {
        id: 4,
        name: "Sophia",
        physics: 91,
        chemistry: 83,
        math: 97,
      },
      {
        id: 5,
        name: "William",
        physics: 67,
        chemistry: 89,
        math: 72,
      },
      {
        id: 6,
        name: "Olivia",
        physics: 94,
        chemistry: 81,
        math: 65,
      },
      {
        id: 7,
        name: "James",
        physics: 79,
        chemistry: 72,
        math: 84,
      },
      {
        id: 8,
        name: "Ava",
        physics: 88,
        chemistry: 96,
        math: 90,
      },
      {
        id: 9,
        name: "Ethan",
        physics: 73,
        chemistry: 84,
        math: 78,
      },
      {
        id: 10,
        name: "Emma",
        physics: 82,
        chemistry: 88,
        math: 91,
      },
      {
        id: 11,
        name: "Liam",
        physics: 95,
        chemistry: 77,
        math: 83,
      },
      {
        id: 12,
        name: "Mia",
        physics: 89,
        chemistry: 92,
        math: 78,
      },
    ];

    console.log(studentMarks);

    return (
      <div>
        <LineChart width={1000} height={800} data={studentMarks} />
        <Line dataKey="physics" stroke="#82ca9d" />
        <Line dataKey="chemistry" />
        <Line dataKey="math" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </div>
    );
};

export default Dashboard;