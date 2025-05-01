import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { BASE_URL } from '../utils/config';
import image from "../assets/hero-section.png"
import ClipLoader from 'react-spinners/ClipLoader';

export default function SingleBlog() {
    const { id } = useParams();
    const [singleBlog, setSingleBlog] = useState();
    // 7.fetching Blogs by topic
    useEffect(() => {
        console.log("blog");
        const fetchBlog = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/v1/blog/singleblog/${id}`);
                const { data } = await response.json();
                console.log("blog data:", data);
                setSingleBlog(data);
            } catch (e) {
                console.error('Error fetching posts:', e);
            }
        };
        fetchBlog();
    }, []);
    return (
        <>
            {!singleBlog ? <ClipLoader /> :

                // <div className='mt-4 px-48'>
                //   <img src={image} alt="" className='w-150 mx-auto' />
                //   <h2 className='bg-purple-900 p-2 mt-1 text-white font-bold rounded-2xl text-center text-2xl'>Title: {singleBlog.title}</h2>
                //   <p>{singleBlog.content}</p>
                //   <p className='border p-2 mt-2 w-100 mx-auto bg-green-600 rounded font-semibold text-white '>Published On:{singleBlog.createdAt}</p>

                // </div>
                <div class="flex justify-center items-center min-h-screen my-3">
                    <div class="w-3/4">
                        <div class=" mb-4 mt-4 text-2xl text-center font-bold pb-2 ">
                            Blog Details
                        </div>

                        {/* <!-- Centering wrapper --> */}
                        <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full  flex-row">
                            <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                <img
                                    src={image}
                                    alt="card-image" class="object-cover w-full h-full" />
                            </div>
                            <div class="p-6">
                                <h6
                                    class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 ">
                                    Title: {singleBlog.title}
                                </h6>
                                <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Topic: {singleBlog.topic}
                                </h4>
                                <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                   <b>Content</b> : {singleBlog.content}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
