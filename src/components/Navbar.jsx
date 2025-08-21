import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex items-center justify-between' >
      <h1>Dashboard</h1>
      <div className='flex items-center border-lg  ml-72 '>
        <img src={assets.Magnifier} alt="" />
        <input type="text" placeholder='search here....' />
      </div>
      <div className='flex items-center ml-54 '>
        <img src={assets.United} alt="" />
        <select name="language" id="language">
            <option value="en-us">Eng (US)</option>
            <option value="en-uk">Eng (UK)</option>
            <option value="en-au">Eng (Aus)</option>
        </select>
        
      </div>
       <div className='flex items-center mr-2 gap-2'>
        <img src={assets.Bell} alt="" />
        <img src={assets.Man} alt="" />
        <select name="language" id="language">
            <option value="en-us" className='text-base font-poppins font-bold'>Musfiq Admin</option>
            <option value="en-uk" className='text-base font-poppins'>Sufyan Admin </option>
            <option value="en-au" className='text-base font-poppins'>Rashed Admin </option>
        </select>
        
      </div>

    </div>
  )
}

export default Navbar
