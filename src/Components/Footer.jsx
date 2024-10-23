import React from 'react'
import home from '../Assests/home.jpg'

const Footer = () => {
  return (
    <>
    <div className='py-10 bg-[#CDE1DF]'>
      <div className='px-44 flex justify-between'>
        <ul>
          <li className='font-bold text-2xl pb-5'>Conatcts</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
        <ul>
          <li className='font-bold text-2xl pb-5'>About</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
        <ul>
          <li className='font-bold text-2xl pb-5'>Services</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
        <div className='w-[150px]'>
          <img className='w-full' src={home} alt="" />
          <p className='py-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>

    </div>
      
      
    </>
  )
}

export default Footer
