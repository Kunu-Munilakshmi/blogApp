import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';
import {Link} from 'react-router-dom'
export default function MyBlogCardList({ item, onDelete }) {
    const { authData } = useContext(AuthContext);
    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;

        try {
            const res = await fetch(`/api/v1/blog/deleteBlog/${item._id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${authData.token}`, // ensure token exists in authData
                },
            });

            if (res.ok) {
                alert('Blog deleted successfully!');
                if (onDelete) onDelete(item._id); // notify parent to remove blog
            } else {
                const error = await res.json();
                alert(`Failed to delete blog: ${error.message}`);
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred while deleting the blog.');
        }
    };
    return (
        <div class="max-w-lg mx-auto my-3">
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <a href="#">
                    <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{item.title}</h5>
                    </a>
                    <p class="font-normal text-gray-700 mb-3">{item.content}</p>

                    {authData &&
                        <span className='flex justify-between text-white mb-2 font-medium text-sm '>
                          <Link to={`/singleblog/${item._id}`}>
                          <button class="cursor-pointer bg-blue-700 hover:bg-blue-800 rounded-lg  px-3 py-2 text-center inline-flex items-center" href="#">
                                Read more
                            </button>
                          </Link> 
                            <button className='cursor-pointer bg-blue-500 hover:bg-blue-800 px-5  rounded-lg'>Update</button>
                            <button className='cursor-pointer bg-red-500 hover:bg-red-800 px-5  rounded-lg' onClick={handleDelete}>Delete</button>
                        </span>
                    }
                </div>

            </div>

        </div>)
}
