import React from 'react'
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
function HomeMain() {
  return (
    <div>
         <Header />
      <div className="flex w-screen">
        <Navbar />
        <div className=" overflow-y-scroll h-[91vh] w-full ">
          <Outlet/>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomeMain