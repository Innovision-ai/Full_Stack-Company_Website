import React from 'react';
import './blog.css';
import yoga4 from '../../assets/yoga4.png';
import yoga5 from '../../assets/yoga5.jpg';
import RAG1 from '../../assets/RAG1.jpg';
import Danda from '../../assets/Danda.png'; // Importing Danda if needed
const blogs = [
  {
    image: yoga4, // Corrected: using the imported variable directly
    title: 'Implementation of Machine Learning Technique for Identification of Yoga Poses',
    link: 'https://ieeexplore.ieee.org/abstract/document/9115758',
  },
  {
    image: yoga5, // Corrected: using the imported variable directly
    title: 'Real-time Recognition of Yoga Poses using computer Vision for Smart Health Care',
    link: 'https://arxiv.org/abs/2201.07594',
  },
  {
    image: RAG1, // Corrected: using the imported variable directly
    title: 'RAG In AI Applications',
    link: '#',
  },
];

function Blog() {
  return (
     <section id="blog">
    <div className="blog-section">
      <div className="blog-header">
<img src={Danda} alt="Danda" className="blog-icon" />
        <h2>Our Blogs</h2>
        <span>/</span>
        <h2>Research Paper</h2>
      </div>
      <div className="blog-list">
        {blogs.map((blog, index) => (
  <div key={index} className="blog-card">
    <img src={blog.image} alt="blog" className="blog-image" />
    <h3 className="blog-title">{blog.title}</h3>
    {blog.link === '#' ? (
      <span className="coming-soon">Coming Soon</span>
    ) : (
      <a href={blog.link} className="read-more" target="_blank" rel="noopener noreferrer">Read More</a>
    )}
  </div>
))}
      </div>
    </div><div className='margin'>
                <span> .</span>
                </div>

     </section> 
  );
}

export default Blog;
