import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Correct import
import { AuthContext } from '../context/AuthProvider';
import { BASE_URL } from '../utils/config';
import logo from "../assets/logo.jpg"
export default function BlogCard({ item, onDelete }) {
  const { authData } = useContext(AuthContext);
  // console.log("BlogCard token ",authData);
  // console.log("item",item);

  // const handleDelete = async () => {
  //   if (!window.confirm('Are you sure you want to delete this blog?')) return;

  //   try {
  //     const res = await fetch(`${BASE_URL}/api/v1/blog/deleteBlog/${item._id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         Authorization: `Bearer ${authData.token}`, // ensure token exists in authData
  //       },
  //     });

  //     if (res.ok) {
  //       alert('Blog deleted successfully!');
  //       if (onDelete) onDelete(item._id); // notify parent to remove blog
  //     } else {
  //       const error = await res.json();
  //       alert(`Failed to delete blog: ${error.message}`);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert('An error occurred while deleting the blog.');
  //   }
  // };

  return (
    // <div className="bg-gray-450 rounded-lg shadow-lg overflow-hidden w-75 cursor-pointer mt-4 mb-2">
    //   <Link to={`/singleblog/${item._id}`}>
    //     <div className="px-6 py-4" key={item.user.id}>
    //       <div className="font-bold text-xl text-gray-900 mb-2 h-20">{item.title}</div>
    //       <div className="text-sm text-gray-600 mb-4">
    //         <span className="font-semibold">Topic: </span> {item.topic}
    //       </div>
    //       <div className="text-sm text-gray-500">
    //         <span className="font-semibold">By:</span> {item.user.name}
    //       </div>
    //       <div className="text-xs text-gray-400 mt-1">
    //         <span className="font-semibold">Published on:</span> 2023-11-17
    //       </div>
    //     </div>
    //     <div className="px-6 py-4 h-20">
    //       <p className="text-gray-700 text-base leading-relaxed">
    //         {item.content.slice(0, 50)}....
    //       </p>
    //     </div>
    //     <div className="px-6 py-4">
    //       <button className="px-6 py-2 mx-auto block bg-green-500">Explore Blog</button>
    //     </div>
    //   </Link>

    //   {authData.name === item.user.name && (
    //     <button
    //       onClick={handleDelete}
    //       className="bg-red-500 block mx-auto text-white px-4 py-1 rounded mb-2"
    //     >
    //       Delete
    //     </button>
    //   )} 
    // </div>
    <div class="flex justify-center items-center m-2">


      <div class="max-w-[720px] mx-auto bg-gray-500">

        {/* <!-- Centering wrapper --> */}
        <div class="relative flex w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-80">
          <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border flex justify-center items-center ">
            <img
              src={logo}
              alt="ui/ux review check" className='w-30 h-30 rounded-full mt-4' />
          </div>
          <div class="p-6">
            <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {item.topic}
            </h4>
            <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              {item.content.slice(0, 50)}
            </p>
          </div>
          <div class="flex items-center justify-between p-6">
            <div class="flex items-center -space-x-3">
              <img alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
              <img alt="Tania Andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
            </div>
            <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              Author: <b>{item.user.name}</b>
            </p>
            <div>
              <Link to={`/singleblog/${item._id}`}>
                <button className='border bg-gray-300 px-2 cursor-pointer'>Explore Blog</button>
              </Link>
            </div>

          </div>
          {/* update & delete blog when user logged in */}
          {/* {authData &&
            <div className='flex justify-around text-white mb-4 mt-2'>
              <button className='bg-blue-500 px-2'>Update</button>
              <button className='bg-red-500 px-3' onClick={handleDelete}>Delete</button>
            </div>
          } */}

        </div>
      </div>

    </div>
  );
}
