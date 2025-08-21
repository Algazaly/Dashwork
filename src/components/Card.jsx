import React from 'react'

const Card = ({image, price, title, percentage, className, iconBg }) => {
  return (
    <div className={`flex flex-col justify-between p-6 rounded-xl shadow-sm ${className}`}>
      <div className={`w-12 h-12 flex items-center justify-center rounded-full ${iconBg}`}>
        <img src={image} alt="" className='w-6 h-6 '  />
      </div>
      <div>
        <h1 className='text-2xl font-semibold font-poppins text-gray-600'>{price}</h1>
        <h2 className='text-gray-500 font-medium font-poppins '>{title}</h2>
        <p className='text-xs text-blue-500 font-poppins'>{percentage}</p>
      </div>
    </div>
  )
}

export default Card
