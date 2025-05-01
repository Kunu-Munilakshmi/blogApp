import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import BlogCard from '../Components/BlogCard';
import { Link } from 'react-router';
import MyBlogCardList from '../Components/MyBlogCardList';

export default function Myblogs() {
  // accessing allBlogs data from context to display blogs corresponding to login
  const {allBlogs, authData,setAllBlogs}=useContext(AuthContext);
  console.log("MyBlogs.jsx, allBlogs",allBlogs);
  const fAllBlogs=allBlogs.filter(item=>item.user.name==authData.name);
  console.log("fAllBlogs",fAllBlogs);

   // Remove blog from list after deletion
   const handleDelete = (id) => {
    setAllBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
  };
  return (
  <>
    <div className='flex flex-wrap justify-around mt-5 px-12 '>
      {
        fAllBlogs.map((item,index)=>    
            // <BlogCard item={item} key={item._id} onDelete={handleDelete}/>
        <MyBlogCardList item={item} key={item._id} onDelete={handleDelete}/>
      )
      }

    </div>
    <div className='text-center mb-4'>
       <Link to="/createblog"> <button className='border w-80 bg-green-600 border-none text-white font-bold text-xl rounded cursor-pointer'>Create Blog</button></Link>
       </div>
       </>
  )
}
