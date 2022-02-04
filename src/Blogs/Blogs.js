import React, { Component } from 'react';
import Blog from './Blog';
import Preloader from '../Preloader/Preloader';
import './Blogs.css';
import { useState,useEffect } from 'react';
const Blogs = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch('https://api.jsonbin.io/b/61ddbae62675917a628ed3c0')
                .then(res => {
                    console.log(res);
                    return res.json();
                })
                .then(data => {
                    console.log(data.blogs);
                    setBlogs(data.blogs);
                    setIsPending(false);
                })
        }, 2000);
    }, [])

    return (
        <div className="body">
            {isPending && <Preloader/>}
            {blogs && <Blog blogs={blogs} />} 
        </div>
    );
}     
export default Blogs;
