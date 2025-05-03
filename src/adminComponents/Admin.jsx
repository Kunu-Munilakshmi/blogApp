import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import admin_img from "../assets/admin_img.jpg"
export default function Admin() {
  const { authData } = useContext(AuthContext);
  return (
    <div className='flex flex-col items-center flex-1 pb-6 pt-1'>
      <img src={admin_img} alt="admin image" />
      <h4 className='text-2xl font-bold'>{authData.name}</h4>
    </div>
  )
}
