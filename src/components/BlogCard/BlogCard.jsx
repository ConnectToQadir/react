import './BlogCard.css'

const BlogCard = ({title,imgURL}) => {
  return (
    <div className='BlogCard'>
        <div className="imgDiv">
            <img src={imgURL} alt="" />
        </div>
        <h2>{title}</h2>
        <a href="/blog">Read More</a>
    </div>
  )
}

export default BlogCard