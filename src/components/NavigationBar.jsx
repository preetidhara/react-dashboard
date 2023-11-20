import React, { useState } from 'react'
import logo from '/src/assets/Logo.png';
import { motion } from "framer-motion";
import arrow from '/src/assets/arrow.svg';
import {LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowLeftRight,
  HelpCircle,
  Expand

} from "lucide-react";
const Navlinks = [
 {
  name:"Dashboard",
  icon:LayoutDashboard
 },
 {
  name:"Activity",
  icon:Clock3
 }
 ,{
  name:"Analytics",
  icon:BarChart2
 },{
  name:"Transactions",
  icon:ArrowLeftRight
 },
 {
  name:"Help Center",
  icon:HelpCircle
 },

]

const variants = {
  Expand:{ width:"20%"},
  NonExpnd:{
    width :"4.7%"
  }
}

function NavigationBar() {
  
  const [activeIndex,SetActiveIndex] = useState(0)

  const [isExpand,IsNotExpand] = useState(true)

  return (
    <motion.div animate={isExpand?"Expand":"NonExpnd"}
    variants={variants}
    >
      <div className={'py-12 flex flex-col h-screen border-r-2 relative ' + (isExpand ? ' px-10' : 'px-2 mx-1')}>
      <div className='logo-div flex space-x-3 items-center'>
      <img src={logo} alt='' />
        <span className={isExpand?"block":"hidden"} >Money Tracker</span>
      </div>

 
      <div onClick={()=> IsNotExpand(isExpand=>!isExpand) } className='bg-red-400 rounded-full w-5 h-5 absolute -right-3 top-14 flex justify-center items-center'>
        <img src={arrow} alt="" className='w-[5px]' />
      </div>

      <div className='flex flex-col space-y-8 mt-12'>
        {Navlinks.map((item,index)=>
        <div key={index} className={'flex justify-start items-center space-x-2 px-2 py-2 cursor-pointer ' + 
        (activeIndex===index ? "bg-red-400 text-white font-semibold rounded-xl	" : "")}
         onClick={() => SetActiveIndex(index)} >
          <div className=''>
          <item.icon/>
          </div>
          <span className={isExpand?"block":"hidden"}>
            {item?.name}
          </span>
        </div>)}
      </div>
    </div>
    </motion.div>
  )
}

export default NavigationBar
