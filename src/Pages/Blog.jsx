import React from 'react'
import BlogCard from '../components/BlogCard/BlogCard'

const Blog = () => {
  return (
    <div className='Blogs'>
        <h1>Blogs</h1>

        <div className="allBlogs">


            <BlogCard title="1st blog title" imgURL="https://res.cloudinary.com/connecttoqadir/image/upload/v1678434870/edifyBlog/b8xnzema8utxqx0kblwg.jpg" />
            <BlogCard title="2st blog title" imgURL="https://res.cloudinary.com/connecttoqadir/image/upload/v1678431974/edifyBlog/k7zcovmlt1adtx8wrvpa.webp" />
            <BlogCard title="3st blog title" imgURL="https://res.cloudinary.com/connecttoqadir/image/upload/v1678271815/edifyBlog/lzn8bk8apecl6asrc6js.webp" />
            <BlogCard title="4st blog title" imgURL="https://res.cloudinary.com/connecttoqadir/image/upload/v1678261877/edifyBlog/teapvcvy5uzesmvsfpty.webp" />
        
        </div>
    </div>
  )
}

export default Blog