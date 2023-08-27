import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {
  FaTh,
  FaHome,
  FaBars,
  FaUserAlt,
  FaBookmark,
  FaBookReader,
  FaInfoCircle
} from "react-icons/fa"
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const manuItem = [
    {
      path: '/dashboard',
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: '/',
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: '/MyLearning',
      name: "MY Learning",
      icon: <FaBookmark />,
    },
    {
      path: '/courses',
      name: "Course",
      icon: <FaBookReader />,
    },
    {
      path: '/Discussion',
      name: "Profile",
      icon: <FaUserAlt />,
    },
    {
      path: '/about',
      name: "About",
      icon: <FaInfoCircle />,
    },
  ]

  return (
    <>
      <button onClick={toggleVisibility} className='fabbut '><FaBars/></button>
      <div className='my-6 mx-2 bg-[#1E2A55] w-28 h-full text-center rounded-3xl left-11 resNav max-h-[75vh] flex-wrap'>
            <div className='p-5'>
              {
                manuItem.map((item, index) => (
                  <NavLink to={item.path} key={item.name} className="link max-h-[10vh]" activeClassName="active" >
                    <div className='inline-block max-h-[5vh] text-3xl pt-3' >{item.icon}</div>
                    <div className=' pb-3'>{item.name}</div>
                  </NavLink>
                ))
              }
            </div>
          </div>
      {isVisible && (
          <div className='p-5 h-screen w-screen bg-[#09092c] flow-root absolute z-10 text-center text-xl p-4'>
          {
            manuItem.map((item, index) => (
              <NavLink to={item.path} key={item.name} className="link max-h-[10vh]" activeClassName="active" >
                <div className=' pb-3' onClick={toggleVisibility}>{item.name}</div>
              </NavLink>
            ))
          }
        </div>
      )}


    </>
  )
}

export default Navbar