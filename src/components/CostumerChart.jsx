import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, } from "recharts";

const data = [
  { month: "Jan", loyal: 340, new: 260, unique: 320 },
  { month: "Feb", loyal: 320, new: 230, unique: 350 },
  { month: "Mar", loyal: 290, new: 180, unique: 300 },
  { month: "Apr", loyal: 210, new: 120, unique: 270 },
  { month: "May", loyal: 200, new: 200, unique: 210 },
  { month: "Jun", loyal: 280, new: 300, unique: 240 },
  { month: "Jul", loyal: 310, new: 370, unique: 300 },
  { month: "Aug", loyal: 290, new: 350, unique: 320 },
  { month: "Sept", loyal: 270, new: 320, unique: 290 },
  { month: "Oct", loyal: 250, new: 290, unique: 270 },
  { month: "Nov", loyal: 220, new: 250, unique: 230 },
  { month: "Dec", loyal: 150, new: 130, unique: 200 },
];

const CostumerChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Visitor Insights</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3"  />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis domain={[0, 400]} axisLine={false} tickLine={false} /> 
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="loyal" stroke="#A020F0" strokeWidth={3}  dot={false} />
          <Line type="monotone" dataKey="new" stroke="#FF6347" strokeWidth={3}   dot={false}/>
          <Line type="monotone" dataKey="unique" stroke="#32CD32" strokeWidth={3}  dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>

  )
}

export default CostumerChart
