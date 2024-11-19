import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({blog,handleAddToBookmark}) => {
    // console.log(blog)
    const {title,cover_img,reading_time,author_name,author_img,published_date,hashtag}=blog
    return (
        <div className='mt-20'>
            <img className='w-full mb-8 rounded-2xl' src={cover_img} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                  <img className='w-14 ' src={author_img} alt="" />
                  <div className='ml-6'>
                    <h3 className='text-2xl'>{author_name}</h3>
                    <p>{published_date}</p>
                  </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><CiBookmarkPlus></CiBookmarkPlus></button>


                </div>
            </div>
            <h1>{title}</h1>
            <p>
                {
                    hashtag.map((hash,idx)=> <span key={idx}><a href=''>  {hash}</a></span>)
                }
            </p>
            
        </div>
    );
};

export default Blog;