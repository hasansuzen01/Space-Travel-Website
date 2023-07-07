import React from 'react'
import { PiShootingStarThin } from 'react-icons/pi';
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className='navbarDiv'>
                <PiShootingStarThin className='starİcon' />
                <div className='line'>
                </div>
                <div className='navbarElements'>
                    <div className='text-white  h-14'>
                        <NavLink to="/"><div className='ml-5 link'>
                            00 HOME
                            <div className='hoverLine'>

                            </div>
                        </div></NavLink>
                    </div>
                    <div className='text-white  h-14'>
                        <NavLink to="/destination"><div className='ml-20 link'>
                            01 DESTİNATİON
                            <div className='hoverLine'>

                            </div>
                        </div></NavLink>
                    </div>
                    <div className='text-white  h-14'>
                        <NavLink to="/crew"><div className='ml-20 link'>
                            02 CREW
                            <div className='hoverLine'>

                            </div>
                        </div></NavLink>
                    </div>
                    <div className='text-white  h-14'>
                        <NavLink to="/technology"><div className='ml-20 link'>
                            03 TECHNOLOGY
                            <div className='hoverLine'>

                            </div>
                        </div></NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;