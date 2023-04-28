import React from 'react'
import './Blog.css'

const Blog = () => {
  return (
        <div className=" bp-maindiv">
            <div className="bp-contentdiv">
                <div className="bp-imgdiv">
                    <img src="https://www.meetingsnet.com/sites/meetingsnet.com/files/styles/article_featured_standard/public/uploads/2016/12/sky-drone.jpg?itok=4PlJH9d4" alt="" />
                </div>
                <div className="bp-textdiv">
                    <small>Marketing</small>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo cum non quia porro quos voluptatibus.</p>
                    <button className='bp-btn'>Read Full Article</button>
                </div>
            </div>


            <div className="bp-contentdiv">
                <div className="bp-imgdiv">
                    <img src="https://img.rolandberger.com/content_assets/content_images/captions/rb_dig_20_001_03_art_305_uam_passenger_drones_0003_it_image_caption_w1280.jpg" alt="" />
                </div>
                <div className="bp-textdiv">
                    <small>Marketing</small>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo cum non quia porro quos voluptatibus.</p>
                    <button className='bp-btn'>Read Full Article</button>
                </div>
            </div>


            <div className="bp-contentdiv">
                <div className="bp-imgdiv">
                    <img src="https://www.ppa.com/assets/images/social/Drone_Article_1200x630.jpg" alt="" />
                </div>
                <div className="bp-textdiv">
                    <small>Marketing</small>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo cum non quia porro quos voluptatibus.</p>
                    <button className='bp-btn'>Read Full Article</button>
                </div>
            </div>
        </div>
    
  )
}

export default Blog
