import React from 'react'
import CostumerChart from './CostumerChart'
import Salesreport from './Salesreport'
import RevenueChart from './RevenueChart'
import SatisfactoryChart from './SatisfactoryChart'
import TargetChart from './TargetChart'
import TopProduct from './TopProduct'
import VolumeService from './VolumeService'

const Dashboard = () => {
  return (
   <> 
   <div className=''>
   <div>
  <div className="w-full md:w-full">
    <Salesreport />
  </div>
  
</div>

 <div className="flex flex-col mt-4 md:flex-row gap-4">
  <div className="w-full md:w-[45%]">
    <CostumerChart />
  </div>
  
  <div className="w-full md:w-1/3">
    <RevenueChart />
  </div>
  
  <div className="w-full md:w-1/3">
    <SatisfactoryChart />
  </div>
  
</div>

<div className="flex flex-col mt-4 md:flex-row gap-4">
  <div className="w-full md:w-1/3">
    <TargetChart />
  </div>
  <div className="w-full md:w-1/3">
    <TopProduct />
  </div>
  <div className="w-full md:w-1/3">
    <VolumeService />
  </div>
</div>
</div>
</>
  )
}

export default Dashboard
