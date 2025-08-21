import React from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, } from 'recharts';

const data = [
    { name: "Jan", reality: 7, target: 9 },
    { name: "Feb", reality: 6.5, target: 8 },
    { name: "Mar", reality: 6, target: 10 },
    { name: "Apr", reality: 8, target: 9.5 },
    { name: "May", reality: 7.5, target: 10 },
    { name: "June", reality: 7, target: 10 },
    { name: "July", reality: 7.5, target: 9.8 },
  ];
const TargetChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-full max-w-md">
      <h2 className="text-lg font-bold text-[#1b1b3a] mb-4">
        Target vs Reality
      </h2>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barCategoryGap={30}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="reality" fill="#10B981" radius={[6, 6, 0, 0]} barSize={20} />
          <Bar dataKey="target" fill="#FACC15" radius={[6, 6, 0, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-emerald-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v3m6-3v3m-9 4h12" />
              </svg>
            </span>
            <div>
              <p className="text-gray-700 font-medium">Reality Sales</p>
              <p className="text-xs text-gray-500">Global</p>
            </div>
          </div>
          <p className="text-emerald-500 font-bold">8.823</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v4H3zM4 7h16v13H4z" />
              </svg>
            </span>
            <div>
              <p className="text-gray-700 font-medium">Target Sales</p>
              <p className="text-xs text-gray-500">Commercial</p>
            </div>
          </div>
          <p className="text-yellow-500 font-bold">12.122</p>
        </div>
      </div>
    </div>
  )
}

export default TargetChart
