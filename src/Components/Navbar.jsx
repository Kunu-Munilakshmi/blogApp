import React, { useContext } from 'react';
import logo from '../assets/logo-img.webp'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
const Navbar = () => {
  const { authData, setAuthData } = useContext(AuthContext);
  console.log("navbar authdata", authData);
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;


  const handleLogout = () => {
    setAuthData({});
    sessionStorage.removeItem("authData");
    navigate("/");
  };
  return (
    <nav className="flex items-center justify-between px-12 shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <Link to={authData.role == "user" ? "/" : "/admin/dashboard"}> <img
          src={logo} // Replace with your actual logo path
          alt="Logo"
          className="h-20 w-20 rounded-full"
        />
        </Link>
        <span className='font-bold '>AchieversIT Blogs</span>
      </div>

      {/* Right: Navigation links */}
      <ul className="flex items-center space-x-6 font-semibold">
  <li>
    <Link
      to={authData.role === "user" ? "/" : "/admin/dashboard"}
      className={isActive(authData.role === "user" ? "/" : "/admin/dashboard") ? "text-blue-600 underline" : ""}
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="/myblog"
      className={isActive("/myblog") ? "text-blue-600 underline" : ""}
    >
      {Object.keys(authData).length === 0 ? "Create Blog" : "My Blogs"}
    </Link>
  </li>

  <li>
    <Link
      to={authData.role !== "user" ? "/about" : "/profile"}
      className={isActive(authData.role !== "user" ? "/about" : "/profile") ? "text-blue-600 underline" : ""}
    >
      {authData.role !== "user" ? "About Us" : "Profile"}
    </Link>
  </li>

  {Object.keys(authData).length !== 0 ? (
    <>
      <li className="text-blue-600">Welcome, {authData.name}</li>
      <li
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </li>
    </>
  ) : (
    <li className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md font-semibold">
      <Link to="/login" className={isActive("/login") ? "underline" : ""}>Login</Link>
    </li>
  )}
</ul>

    </nav>
  );
};

export default Navbar;
