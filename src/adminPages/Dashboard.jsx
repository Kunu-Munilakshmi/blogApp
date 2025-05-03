import React from 'react'
import Sidebar from '../adminComponents/Sidebar'
import Admin from '../adminComponents/Admin'
// Outlet is for nested content
import { Outlet, Route , Routes} from 'react-router-dom'
import AllBlogs from '../Components/AllBlogs'

export default function Dashboard() {
  return (
    <div className='flex '>
        <Sidebar/>
        {/* applying route to render corresponding component based clicking on sidebar icon */}
       <Outlet/>
    </div>
  )
}
