import React from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, } from 'recharts';


const data = [
  { name: "Monday", online: 14000, offline: 12000 },
  { name: "Tuesday", online: 17000, offline: 12000 },
  { name: "Wednesday", online: 5000, offline: 22000 },
  { name: "Thursday", online: 15000, offline: 6000 },
  { name: "Friday", online: 12000, offline: 11000 },
  { name: "Saturday", online: 17000, offline: 14000 },
  { name: "Sunday", online: 21000, offline: 11000 },
];


const RevenueChart = () => {
  return (
     <div className="bg-white shadow-lg rounded-3xl p-6">
      <h2 className="text-xl font-bold text-[#1E1B4B] mb-4">Total Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={10}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis domain={[0, 25000]} tickFormatter={(value) => `${value / 1000}k`} axisLine={false} tickLine={false}  />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
          />
          <Bar dataKey="online" fill="#1E90FF" name="Online Sales" radius={[4, 4, 0, 0]} />
          <Bar dataKey="offline" fill="#00C49F" name="Offline Sales" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart
