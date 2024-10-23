import React from 'react'
import home from '../Assests/home.jpg'

const Home = () => {
  return (
    <>
      <div className='px-44 my-10'>
        <div className='flex justify-between my-10 '>
          <div className='py-10'>
          <h2 className='text-3xl font-bold '>Welcome</h2>
          <p className='py-5 my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium temporibus quod rerum. Tenetur quidem eveniet dicta, eum fuga autem reiciendis!</p>
          <button className='px-4 py-2 bg-[#CDE1DF] rounded-lg'>Click For more Info</button>

          </div>
          <div>
            <img src={home} alt="" />
          </div>
        

        </div>
        
      </div>
    </>
  )
}

export default Home
