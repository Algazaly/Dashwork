import React from 'react'

const products = [
    {
      id: "01",
      name: "Home Decor Range",
      popularity: 45,
      color: "bg-sky-500",
      trackColor: "bg-sky-200",
      salesColor: "text-sky-500",
    },
    {
      id: "02",
      name: "Disney Princess Pink Bag 18'",
      popularity: 29,
      color: "bg-emerald-500",
      trackColor: "bg-emerald-200",
      salesColor: "text-emerald-500",
    },
    {
      id: "03",
      name: "Bathroom Essentials",
      popularity: 18,
      color: "bg-purple-500",
      trackColor: "bg-purple-200",
      salesColor: "text-purple-500",
    },
    {
      id: "04",
      name: "Apple Smartwatches",
      popularity: 25,
      color: "bg-orange-500",
      trackColor: "bg-orange-200",
      salesColor: "text-orange-500",
    },
  ];
const TopProduct = () => {
  return (
     <div className="bg-white rounded-2xl shadow-lg p-5 w-full max-w-3xl">
      <h2 className="text-lg font-bold text-[#1b1b3a] mb-4">Top Products</h2>

      <div className="grid grid-cols-4 font-semibold text-gray-500 text-sm border-b pb-2">
        <span>#</span>
        <span>Name</span>
        <span>Popularity</span>
        <span>Sales</span>
      </div>

      {products.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-4 items-center py-3 border-b last:border-b-0 text-sm"
        >
          {/* ID */}
          <span className="text-gray-400 font-medium">{product.id}</span>

          {/* Name */}
          <span className="text-gray-700">{product.name}</span>

          {/* Popularity */}
          <div className="flex items-center gap-2">
            <div className="w-full bg-gray-100 rounded-full h-2 relative overflow-hidden">
              <div
                className={`${product.color} h-2 rounded-full`}
                style={{ width: `${product.popularity}%` }}
              ></div>
            </div>
          </div>

          {/* Sales */}
          <span
            className={`${product.salesColor} border px-2 py-0.5 rounded-full text-xs font-semibold border-current`}
          >
            {product.popularity}%
          </span>
        </div>
      ))}
    </div>
  )
}

export default TopProduct
