import React from 'react'

export const Register=()=> {
  return (
    <div className="flex flex-col border-2 p-10 border-sky-700 bg-[whitesmoke]">
    <h1 className="text-5xl font-semibold ">Register</h1>
    <p className="my-5">Enter your details</p>
    <input type="name" placeholder="Name" className='bg-red-950'/>
    <input type="email" placeholder="Email" className='bg-red-950' />
    <input type="password" placeholder="Password"className='bg-red-950' />
    <button className='bg-black my-2 text-white rounded-lg py-2'>Sign in</button>
    <button className='bg-slate-500 my-2 text-white rounded-lg py-2'>Create account</button>
  
  </div>
  )
}

export default Register