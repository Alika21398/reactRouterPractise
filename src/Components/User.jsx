import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {users} from './User'

function User() {
    const {userid} = useParams();

    
    // const {username} = params

    console.log("params" ,users)
  return (
    <>
    <div className='px-44 bg-gray-300  py-10'>
        {/* <p>I am user no. {params.username}</p> */}
        {users.map((items, index)=>{
            return (
                <div key={index} className='  text-xl'>
                    <div className='flex gap-20 py-5'>
                        <p>{items.userid}</p>
                        <p>{items.username}</p>
                        <button  className='py-2 px-4 rounded-md bg-pink-300'><Link to={`details/${items.userid}`}>Details</Link></button>
                        {userid}
                        </div>

                </div>
            )
        })}
        {/* <p className='border py-4 px-4 bg-pink-300'>My name is {username} </p> */}
    </div>
      
    </>
  )
}

export default User
