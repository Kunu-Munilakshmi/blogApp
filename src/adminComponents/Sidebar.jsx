// import React from 'react'
// import { FaHome } from "react-icons/fa";
// import { FaUserFriends } from "react-icons/fa";
// import { FaBlogger } from "react-icons/fa";
// import { Link, useNavigate } from 'react-router-dom';
// export default function Sidebar() {
//   const navigate=useNavigate();
//   return (
//     <div className="bg-gray-200 w-40  pt-8 flex flex-col shadow  items-center gap-10">
//       {/* <p className='text-2xl font-semibold'>Dashboard</p> */}
//        <div className='text-3xl text-blue-500 cursor-pointer' title="home" onClick={() => navigate('/admin/dashboard')} > <FaHome/></div>
//        <div className='text-3xl text-blue-500 cursor-pointer' title="All users" onClick={() => navigate('/admin/dashboard/users')} ><FaUserFriends/></div>
//       <div className='text-3xl text-blue-500 cursor-pointer' title="All blogs" onClick={() => navigate('/admin/dashboard/blogs')}><FaBlogger/></div>

//     </div>
//   )
// }
import React, { useState } from 'react';
import { FaHome, FaUserFriends, FaBlogger } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const [active, setActive] = useState('home');
  const navigate = useNavigate();

  const handleClick = (section) => {
    setActive(section);

    switch (section) {
      case 'home':
        navigate('/admin/dashboard');
        break;
      case 'users':
        navigate('/admin/dashboard/users');
        break;
      case 'blogs':
        navigate('/admin/dashboard/blogs');
        break;
      default:
        break;
    }
  };

  const iconStyle = (section) =>
    `text-3xl cursor-pointer transition-colors duration-200 ${
      active === section ? 'text-blue-600 scale-110' : 'text-blue-400'
    }`;

  return (
    <div className="bg-gray-200 w-30 pt-8 flex flex-col shadow items-center gap-10">
      <div className={iconStyle('home')} title="Home" onClick={() => handleClick('home')}>
        <FaHome />
      </div>
      <div className={iconStyle('users')} title="All Users" onClick={() => handleClick('users')}>
        <FaUserFriends />
      </div>
      <div className={iconStyle('blogs')} title="All Blogs" onClick={() => handleClick('blogs')}>
        <FaBlogger />
      </div>
    </div>
  );
}

