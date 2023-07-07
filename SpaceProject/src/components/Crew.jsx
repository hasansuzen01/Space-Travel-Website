import React from 'react'

function Crew() {
  return (
    <div className=''>
      <div className='flex ml-32'>
        <p className='text-xl zeroOne'>02</p>
        <p className='text-white text-xl ml-5'>PİCK YOUR DESTINATION</p>
      </div>
      <div className='absolute left-32 bottom-10'>
        <div>
          <p className='text-xl zeroOne'>FLIGHT ENGINEER</p>
          <p className='text-white text-xl'>ANOISHEH ANSARI</p>
        </div>
        <div>
          <p className='w-1/4 text-xs mt-3 text-white'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto totam facere distinctio error libero, ex, perferendis sunt, corrupti dolore quae recusandae magni debitis deleniti. Earum.
          </p>
        </div>
      </div>
      <div className='crewDiv'>
        <img src="../assets/crew/image-anousheh-ansari.png" className='crewİmg mr-36'/>
      </div>


    </div>
  )
}

export default Crew;