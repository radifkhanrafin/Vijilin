import BlogTwo from '@components/pages/BlogTwo'
import React, {useEffect} from 'react'

const Blog_landing_page = () => {
    useEffect(() => {
      document.body.classList.add('home-body');
  
      return () => {
        document.body.classList.remove('home-body');
      };
    }, []);
  return (
    <>
    <BlogTwo />
    </>
  )
}

export default Blog_landing_page
