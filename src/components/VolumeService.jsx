import React from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, } from 'recharts';


const data = [
  { name: "Jan", Volume: 400, Services: 300 },
  { name: "Feb", Volume: 500, Services: 350 },
  { name: "Mar", Volume: 450, Services: 250 },
  { name: "Apr", Volume: 380, Services: 220 },
  { name: "May", Volume: 320, Services: 180 },
];
const VolumeService = () => {
  return (
   <div className="bg-white p-5 rounded-2xl shadow-sm">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Volume vs Service Level
      </h2>

      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={30}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar dataKey="Services" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Volume" stackId="a" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-around items-center mt-4 border-t pt-3">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="text-gray-600 text-sm">Volume</span>
          <span className="font-semibold text-gray-800">1,135</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="text-gray-600 text-sm">Services</span>
          <span className="font-semibold text-gray-800">635</span>
        </div>
      </div>
    </div>
  )
}

export default VolumeService
