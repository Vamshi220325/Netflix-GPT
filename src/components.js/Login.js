import React, { useState } from 'react'
import { BG_URL } from '../utils/constants'
import Header from './Header'

const Login = () => {
     const [isSignIn,setIsSignIn]=useState(true);
    const toggleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src={BG_URL} alt="bg-img"/>
        </div>
        <div >
            <form className='bg-black opacity-85 absolute p-12 w-3/12 my-36 mx-auto left-0 right-0 rounded-lg  '>
                <div className=''>
                    {isSignIn===true?<h2 className='text-white font-bold text-3xl text-center  py-4'>
                     Sign In</h2>:<h2 className='text-white font-bold text-3xl text-center  py-4'>
                     Sign Up</h2>}
                    <div className='text-center'>
                {isSignIn===false&&<input type="text" placeholder='Name' className=' p-4 my-3 w-full rounded-lg bg-gray-600 text-white'/>}
                <input type="text" placeholder='Email ID' className=' p-4 my-3 w-full rounded-lg bg-gray-600 text-white'/>
                <input type="password" placeholder='Password' className='my-3 p-4 w-full rounded-lg bg-gray-600  text-white'/>
                <div>
                <button className=' my-3 p-4 bg-red-600 text-white rounded-lg  w-full font-bold '>{isSignIn?"Sign In":"Sign Up"}</button>
            
                
                </div>
                <h2  onClick={toggleSignIn}className=' text-white  font-bold my-1 cursor-pointer'>{isSignIn?"New to Netflix? Sign Up":"Already a User? Sign In"}</h2>:
                
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login