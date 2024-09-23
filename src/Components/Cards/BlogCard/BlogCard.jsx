import './BlogCard.css'

const BlogCard = ({ image, date, description}) => {
  return (
    <div className='blog-all-card'>
        <div className="blog-card-content">
            <img src={image} alt="" />
            <p className="date">{date}</p>
            <p className="desc">{description}</p>
        </div>
    </div>
  )
}

export default BlogCard