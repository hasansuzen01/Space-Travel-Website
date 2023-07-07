import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

function Europa() {
  return (
    <div className=''>

      <div className='flex p-10 ml-20 items-center content-center'>
        <p className='text-3xl zeroOne'>01</p>
        <p className='text-white text-3xl ml-6'>PİCK YOUR DESTINATION</p>
      </div>
      <div className='flex content-center ml-40'>
        <div>
          <img src="../assets/destination/image-europa.png" alt="" className='moonİmg' />
        </div>
        <div className='ml-32'>
          <div className='flex'>
            <Link to="/destination">
              <p className='text-white text-xs linkHover'>MOON</p>
            </Link>
            <Link to="/destination/mars">
              <p className='text-white ml-6 text-xs linkHover'>MARS</p>
            </Link>
            <Link to="/destination/europa">
              <p className='text-white ml-6 text-xs linkHover'>EUROPA</p>
            </Link>
            <Link to="/destination/titan">
              <p className='text-white ml-6 text-xs linkHover'>TITAN</p>
            </Link>
          </div>
          <div className='text-white'>
            <div className='flex'>
              <h1 className='text-5xl mt-3 ml-8 '>EUROPA</h1>
              <div className='flex ml-11 mt-5'>
                <div className=''>
                  <p className='text-xs'>AVG. DISTANCE</p>
                  <p className='text-2xl'>484 MIL. KM</p>
                </div>
                <div className='ml-10'>
                  <p className='text-xs'>EST. TRAVEL TIME</p>
                  <p className='text-2xl'>5 YEAR</p>
                </div>
              </div>
            </div>
            <p className='w-2/4 text-xs mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Europa;