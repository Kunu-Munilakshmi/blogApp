import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import SingleBlog from '../Pages/SingleBlog'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import CreateBlog from '../Pages/CreateBlog'
import { AuthProvider } from '../context/AuthProvider'
import PrivateRoute from './PrivateRoute'
import Myblogs from '../Pages/Myblogs'
import Dashboard from '../adminPages/Dashboard'
import AllBlogs from '../Components/AllBlogs'
import Admin from '../adminComponents/Admin'
import BlogTable from '../adminPages/BlogTable'
import UserTable from '../adminPages/UserTable'
import Profile from '../Pages/Profile'
import AboutUs from '../Pages/AboutUs'

export default function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/singleblog/:id" element={<SingleBlog/>}/>
        <Route path="/login" element={
          <Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/myblog" element={<PrivateRoute><Myblogs/></PrivateRoute>}/>
        <Route path='/createblog' element={<CreateBlog/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path="/profile" element={<Profile/>}/>

        {/* admin related routing */}
        <Route path="/admin/dashboard" element={<Dashboard/>} >
        <Route index element={<Admin/>}/>
        <Route path="blogs" element={<BlogTable/>}/>
        <Route path="users" element={<UserTable/>}/>
        </Route>
    </Routes>

  )
}
