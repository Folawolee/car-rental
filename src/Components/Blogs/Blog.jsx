import BlogCard from '../Cards/BlogCard/BlogCard'
import './Blog.css'
import blog1 from '../../assets/images/blog1.png'
import blog2 from '../../assets/images/blog2.png'
import blog3 from '../../assets/images/blog3.png'

const Blog = () => {

    const blogpost = [
        {
            image:blog1,
            date:"Feb 22, 2023 / Tips",
            description:"SAFEST CAR RENTAL SERVICES IN 2023"
        },
        {
            image:blog2,
            date:"Feb 22, 2023 / Tips",
            description:"BEST CAR COLLECTION IN THE WORLD"
        },
        {
            image:blog3,
            date:"Feb 25, 2023 / iNFORMATION",
            description:"WHICH CAR IS THE BEST FOR TRAVEL"
        }
    ]
  return (
    <div className='blog'>
        <div className='blog-content'>
            <h1>OUR RECENT POSTS</h1>
            <div className='blog-card'>
                {blogpost.map((card, index) => <BlogCard key={index} image={card.image} date={card.date} description={card.description} />)}
            </div>
            <div className='read-blog'>READ BLOG</div>
        </div>
    </div>
  )
}

export default Blog