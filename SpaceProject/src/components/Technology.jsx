import React from 'react'

function Technology() {
  return (
    <div className=''>
      <div className='flex ml-32'>
        <p className='text-xl zeroOne'>03</p>
        <p className='text-white text-xl ml-5'>SPACE LAUNCH 101</p>
      </div>
      <div className='absolute left-32 bottom-10'>
        <div>
          <p className='text-xs zeroOne'>THE TERMINOLOGY...</p>
          <p className='text-white text-xl'>LAUNCH VEHICLE</p>
        </div>
        <div>
          <p className='w-1/4 text-xs mt-3 text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ea beatae? Nemo nulla, quo alias sit inventore quos animi porro temporibus vero debitis veniam facere qui quia error a est?
          </p>
        </div>
      </div>
      <div className='crewDiv'>
        <img src="../assets/technology/image-launch-vehicle-portrait.jpg" className='technologyİmg mr-36' />
      </div>


    </div>
  )
}

export default Technology;