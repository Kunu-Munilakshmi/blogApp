import React from 'react';

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">About Us</h1>

      <section className="mb-10">
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Welcome to <span className="font-semibold text-blue-600">Blogify</span> – your go-to destination for sharing ideas, stories, and expertise. 
          We aim to empower creators and readers by providing a clean, easy-to-use platform for blogging and discovery.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-sm mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Our mission is to provide a space where writers of all backgrounds can express themselves freely, 
          build an audience, and connect with readers who care. Whether you're a passionate hobbyist or a seasoned writer, 
          Blogify is here to support your voice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="team member"
              className="w-24 h-24 mx-auto rounded-full mb-3"
            />
            <h3 className="text-lg font-medium text-gray-800">Charan Pratap</h3>
            <p className="text-sm text-gray-600">Frontend Developer</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="team member"
              className="w-24 h-24 mx-auto rounded-full mb-3"
            />
            <h3 className="text-lg font-medium text-gray-800">Vindhya</h3>
            <p className="text-sm text-gray-600">Backend Developer</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="team member"
              className="w-24 h-24 mx-auto rounded-full mb-3"
            />
            <h3 className="text-lg font-medium text-gray-800">Muni Lakshmi</h3>
            <p className="text-sm text-gray-600">UI/UX Designer</p>
          </div>
        </div>
      </section>

      <section className="text-center mt-8">
        <p className="text-gray-700 mb-4">Want to join or support our mission?</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
