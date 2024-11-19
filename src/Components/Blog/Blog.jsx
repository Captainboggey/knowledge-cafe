import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    const {title,cover_img,reading_time,author_name,author_img,published_date,hashtag}=blog
    return (
        <div>
            <img className='w-96' src={cover_img} alt="" />
            <div className='flex justify-between'>
                <div className='flex'>
                  <img className='w-14' src={author_img} alt="" />
                  <div className='ml-6'>
                    <h3 className='text-2xl'>{author_name}</h3>
                    <p>{published_date}</p>
                  </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>


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
Blog.propTypes={
    blog: PropTypes.object.isRequired
}
export default Blog;