import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Moon from '../assets/images/moon.svg'

function MainLayout({ Children }) {
  return (
    <div>

      <header className='bg-zinc-300 h-20'>
        <div className=' max-w-[1440px] mx-auto flex items-center justify-between gap-2 h-16'>
          <div>
            <a className=' bg-blue-800 py-3 px-5 font-bold' href="/">C</a>
          </div>


          <div className='text-white '>
            <ul className='text-center '>
              <NavLink className='mr-6 hover:bg-black hover:py-2 hover:px-1 hover:rounded-md' to='/'>Home</NavLink>
              <NavLink className='mr-6' to='/About'>About</NavLink>
              <NavLink className='mr-6' to='/About'>Products</NavLink>
              <NavLink to='/Contact'>Cart</NavLink>
            </ul>
          </div>

          <div>
            <img src={Moon} alt="" />
          </div>
        </div>


      </header>
      {Children}
    </div>

  )
}

export default MainLayout;
