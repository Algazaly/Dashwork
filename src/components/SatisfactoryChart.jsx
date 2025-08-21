import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, AreaChart, Area, } from "recharts";

const data = [
  { name: "1", lastMonth: 3004, thisMonth: 4504 },
  { name: "2", lastMonth: 3200, thisMonth: 4400 },
  { name: "3", lastMonth: 2500, thisMonth: 4600 },
  { name: "4", lastMonth: 2500, thisMonth: 4300 },
  { name: "5", lastMonth: 2700, thisMonth: 4700 },
  { name: "6", lastMonth: 2600, thisMonth: 4200 },
  { name: "7", lastMonth: 3000, thisMonth: 5000 },
];
const SatisfactoryChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-md">
      <h2 className="text-lg font-bold text-[#1b1b3a] mb-4">
        Customer Satisfaction
      </h2>

      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} hide />
          <YAxis axisLine={false} tickLine={false} hide />
          <Tooltip cursor={false} />

          <Area
            type="monotone"
            dataKey="lastMonth"
            stroke="#3B82F6"
            strokeWidth={3}
            fill="url(#colorLastMonth)"
            dot={{ r: 4, fill: "#3B82F6" }}
          />
          <Area
            type="monotone"
            dataKey="thisMonth"
            stroke="#10B981"
            strokeWidth={3}
            fill="url(#colorThisMonth)"
            dot={{ r: 4, fill: "#10B981" }}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex justify-center gap-8 mt-4 border-t pt-3">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="text-gray-500 text-sm">Last Month</span>
          </div>
          <span className="text-gray-700 font-semibold">$3,004</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
            <span className="text-gray-500 text-sm">This Month</span>
          </div>
          <span className="text-gray-700 font-semibold">$4,504</span>
        </div>
      </div>
    </div>
  )
}

export default SatisfactoryChart
