import React from 'react'
import { assets, Carditem } from '../assets/assets'
import Card from './Card'


const Salesreport = () => {
  return (
    <div className='p-8 bg-white  rounded-lg shadow-md '>
        <div className='flex justify-between mb-6'>
        <h1 className='text-lg font-bold'>Today's Sales</h1>
        <button className='flex items-center gap-2 px-4 py-2 text-sm bg-gray-100'>
          <img src={assets.ExportIcon} alt="" className='w-4 h-4' />
            Export
        </button>
        </div>
        <h3 className='mb-4 text-sm text-gray-500'>Sales Summary</h3>
        <div className='flex flex-row gap-32  mb-6'>
            {Carditem.map((item,index) => {
               return <Card 
               key={index}
               image={item.image} 
               price={item.price} 
               title={item.title} 
               percentage={item.percentage}
               className={`${item.color}  w-[180px] h-[184px] `} 
               iconBg={item.iconBg} />
            })

            }
    
        </div>
        
      </div>



  )
}

export default Salesreport
