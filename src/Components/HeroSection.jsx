import React from 'react'
import hero_bg from "../assets/hero-section1.png"
import { Link } from 'react-router';
export default function HeroSection() {
    return (
        <section className="relative bg-cover bg-center py-20 h-80 mt-1"  style={{ backgroundImage: `url(${hero_bg})` }}>
             {/* <!-- Overlay --> */}
             <div className="absolute inset-0 bg-black opacity-20"></div> 
          <div className="max-w-screen-lg mx-auto text-center px-4">
            <h1 className="text-4xl font-extrabold  mb-4">
              Welcome to Our Blog Platform
            </h1>
            {/* <p className="text-xl mb-6">
              Discover the latest articles, tutorials, and insights on web development and more.
            </p> */}
           
          </div>

        </section>
      );
}
