import React,{useContext} from 'react';
import logo from '../assets/logo-img.webp'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
const Navbar = () => {
  const { authData, setAuthData } = useContext(AuthContext);
  console.log("navbar authdata",authData);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthData({});
    sessionStorage.removeItem("authData");
    navigate("/");
  };
  return (
    <nav className="flex items-center justify-between px-12 shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
       <Link to="/"> <img
          src={logo} // Replace with your actual logo path
          alt="Logo"
          className="h-20 w-20 rounded-full"
        />
        </Link>
        <span className='font-bold '>AchieversIT Blogs</span>
      </div>

      {/* Right: Navigation links */}
      <ul className="flex items-center space-x-6 font-semibold">
       
        <li >Home</li>
        {/* <li ><Link to="/createblog">Create Blog</Link></li> */}
        {Object.keys(authData).length===0?<li><Link to="/myblog">Create Blog</Link></li>:<li><Link to="/myblog">My Blogs</Link></li>}
        <li>Contact Us</li>

        {Object.keys(authData).length != 0? (
          <>
            <li className="text-blue-600">Welcome, {authData.name}</li>
            <li className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold cursor-pointer" onClick={handleLogout}>
              Logout
            </li>
          </>
        ) : (
          <li className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md font-semibold">
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
