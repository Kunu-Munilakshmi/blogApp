import React, { useContext, useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';

import axios from 'axios';
import { BASE_URL } from '../utils/config';
import { Link } from 'react-router';
import BlogCard from './BlogCard';
import { AuthContext } from '../context/AuthProvider';
export default function AllBlogs() {
  const [blogsData, setBlogsData] = useState([]);
  // useContext to update blogsData into allBlogs state of context state variable 
  const {setAllBlogs}=useContext(AuthContext);
// 6 fetching All blogs
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // const response = await axios.get(`https://adarshhelvarblogapp.onrender.com/api/v1/blog/allBlogs`);
        const response = await fetch(`${BASE_URL}/api/v1/blog/allBlogs`);
        const { data } = await response.json()
        setBlogsData(data);
        setAllBlogs(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  console.log(blogsData);

 

  return (
   
    <>
   <h1 className='text-center text-2xl mt-4 font-bold'>All Blogs</h1>
      {
        blogsData.length < 1 ? <ClipLoader /> : 
        <div className='flex flex-wrap justify-around mt-5 px-12 '>
          {
            blogsData.map(item=>
              <BlogCard item={item}  />
            )}
      
        </div>
      }
    </>

  )
}

