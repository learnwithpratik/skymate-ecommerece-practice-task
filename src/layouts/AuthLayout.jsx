import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='h-full bg-black'>
        <h1 className='text-2xl'> </h1>
        <Outlet />
    </div>
  )
}

export default AuthLayout