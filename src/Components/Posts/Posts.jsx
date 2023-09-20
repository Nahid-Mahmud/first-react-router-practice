import React from 'react';
import Post from './Post';
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div className='grid grid-cols-5 gap-10 p-5'>
           {posts.map((post,index)=> <Post key={index} post={post} ></Post>)}
        </div>
    );
};

export default Posts;