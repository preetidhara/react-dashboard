import React from 'react'
import Charts from './Charts'

function Dashboard() {
  return (
    <div className='flex flex-col px-10 pt-6'>
      <h1>Dashboard</h1>

        <div className='flex space-x-8'>
            <div className="w-2/5 px-8 py-10 border-zinc-400 border flex flex-col mt-10 rounded-lg	">
                <span>Rohan Sharma </span>
                    <span className='text-slate-500' > Your Expenses : 35,000</span>
            </div>

            <div className="w-2/5 px-8 py-10 border-zinc-400 border flex flex-col mt-10 rounded-lg	">
                <span>Rohan Verma</span>
                    <span className='text-slate-500'> Your Expenses : 45,000</span>
            </div>

        </div>

    <h1 className='mt-10'>Expenses Chart</h1>
    <div className='w-4/5'>
    <Charts/>
    </div>
    <div className='flex space-x-8'>
            <div className="w-2/5 px-8 py-10 border-zinc-400 border flex flex-col mt-10 rounded-lg	">
                <span>Category </span>
                    <span className='text-slate-500	'> Your Expenses : 35,000</span>
            </div>

            <div className="w-2/5 px-8 py-10 border-zinc-400 border flex flex-col mt-10 rounded-lg	">
                <span>Other Expenses</span>
                    <span className='text-slate-500	'> Your Expenses : 35,000</span>
            </div>

        </div>

    </div>
  )
}

export default Dashboard
