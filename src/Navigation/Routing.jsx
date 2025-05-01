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

export default function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/singleblog/:id" element={<SingleBlog/>}/>
        <Route path="/login" element={
          <Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/myblog" element={<PrivateRoute><Myblogs/></PrivateRoute>}/>
        <Route path='createblog' element={<CreateBlog/>}/>
    </Routes>

  )
}
