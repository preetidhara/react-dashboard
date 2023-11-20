import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard'


function App() {

  return (
    <>
      <div className='flex'>
        <NavigationBar/>
       <main className='w-full'>
        <Dashboard/>
       </main>
      </div>
    </>
  )
}

export default App
