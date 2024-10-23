import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function GitHub() {
    // const [data, setData] = useState();
    const data = useLoaderData()
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data))
    // },[])

    console.log("data", data)
  return (
    <>
    <div className='flex gap-10 justify-between px-44 py-10 my-10 bg-gray-400'>
       <div className='w-[40%] p-5 border'> <img className='w-full' src={data.avatar_url} alt="" /></div>
       <div className=' '>
        <div className='text-center text-3xl font-bold underline'>{data.name}</div>
        <div className='my-10 py-10 px-5 bg-gray-200'>
        <div className='text-xl'><span className='font-bold underline text-xl'>GitHub Followers: </span>{data.followers}</div>
        <div className='py-5 text-xl'><span className='font-bold underline text-xl'>Location:</span> {data.location}</div>
        <div><p className='text-xl'><span className='font-bold underline text-xl'>Bio: </span> {data.bio}</p></div>

        </div>
     

       </div>
  

    </div>
   
      
    </>
  )
}

export default GitHub

export const githubLoader= async ()=>{
   const response = await fetch("https://api.github.com/users/hiteshchoudhary")
   return response.json()

}
