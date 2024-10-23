import React from 'react'
import { useParams } from 'react-router-dom'
import {users} from './User'

function Details() {
    const {userid} = useParams()
    const filteredData = users.filter((items)=>{
        if(userid == items.userid){
            return items
        }

    })
    const userDetail = filteredData[0];
    console.log("filteredData", filteredData)
    console.log("userDetails", userDetail)
  return (
    <>
    <div className='px-44 my-10 py-10'>
        <div className='bg-gray-300'>
        <p>I am user no. {userDetail.userid}</p>               
        <p>My name is {userDetail.username}</p>
        </div>
        <div>
           
        </div>
       


    </div>
      
    </>
  )
}

export default Details
