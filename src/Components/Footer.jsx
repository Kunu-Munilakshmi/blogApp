import React,{useContext} from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../context/AuthProvider'

export default function Footer() {
  const {authData}=useContext(AuthContext);
  return (
<footer class="bg-gray-100  px-12 py-10 shadow">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* <!-- Branding --> */}
    <div>
      <h2 class="text-2xl font-bold">Blog App</h2>
      <p class="mt-2 text-sm">Welcome to our Blog App, you can register into our app and post your blog so that your blog information will reach to this world.It is a great platform to share your knowledge & formation</p>
    </div>

    {/* <!-- Navigation --> */}
    <div>
      <h3 class="text-lg font-semibold  mb-3">Quick Links</h3>
      <ul class="space-y-2 text-sm">
        <li><Link to="/" class="hover:text-white transition">Home</Link></li>
        <li> <Link
              to="/myblog"
                    >
              {Object.keys(authData).length === 0 ? "Create Blog" : "My Blogs"}
            </Link></li>
        <li> <Link
              to={authData.role !== "user" ? "/about" : "/profile"}
             
            >
              {authData.role !== "user" ? "About Us" : "Profile"}
            </Link></li>
      </ul>
    </div>

    {/* <!-- Social Media --> */}
    <div>
      <h3 class="text-lg font-semibold  mb-5">Follow Us</h3>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-white transition" aria-label="Twitter">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.05 9.05 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.63 0-4.65 2.42-4.07 5.02A12.94 12.94 0 013 1.64a4.48 4.48 0 001.4 6.04A4.48 4.48 0 012.8 7v.05a4.51 4.51 0 003.6 4.43A4.48 4.48 0 013.2 12a4.52 4.52 0 004.21 3.13A9.05 9.05 0 010 19.54a12.93 12.93 0 007 2.05c8.38 0 13-7.46 12.98-14.16A9.18 9.18 0 0023 3z" />
          </svg>
        </a>
        <a href="#" class="hover:text-white transition" aria-label="Facebook">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 10-11.6 9.87v-6.99h-2.3v-2.88h2.3V9.41c0-2.28 1.35-3.54 3.43-3.54.99 0 2.03.18 2.03.18v2.23h-1.14c-1.13 0-1.48.7-1.48 1.42v1.7h2.5l-.4 2.88h-2.1v6.99A10 10 0 0022 12z" />
          </svg>
        </a>
        <a href="#" class="hover:text-white transition" aria-label="Instagram">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2.1.2 2.6.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.4.4 2.6.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2.1-.4 2.6-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.5.2-1.4.3-2.6.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2.1-.2-2.6-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.4-.4-2.6C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2.1.4-2.6.2-.6.5-1 .9-1.5.5-.5.9-.8 1.5-1 .5-.2 1.4-.3 2.6-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.6.5 3.8.8 2.9 1.2 2.2 1.8 1.5 2.5.8 3.2.2 3.9 0 4.8c-.3.8-.6 1.9-.7 3.2C-.1 8.3-.1 8.7-.1 12s0 3.7.1 4.9c.1 1.3.4 2.4.7 3.2.3.9.8 1.6 1.5 2.3.7.7 1.4 1.2 2.3 1.5.8.3 1.9.6 3.2.7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.4-.4 3.2-.7.9-.3 1.6-.8 2.3-1.5.7-.7 1.2-1.4 1.5-2.3.3-.8.6-1.9.7-3.2.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.4-2.4-.7-3.2-.3-.9-.8-1.6-1.5-2.3-.7-.7-1.4-1.2-2.3-1.5-.8-.3-1.9-.6-3.2-.7C15.7-.1 15.3 0 12 0zM12 5.8A6.2 6.2 0 1112 18.2 6.2 6.2 0 0112 5.8m0-2.1a8.3 8.3 0 100 16.6 8.3 8.3 0 000-16.6zm6.4-.4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div class="mt-8 text-center text-sm text-gray-500">
    © 2025 MyBlog. All rights reserved.
  </div>
</footer>
  )
}
