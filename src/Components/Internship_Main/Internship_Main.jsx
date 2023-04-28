import React from 'react'
import './Internship_Main.css'

import {Link} from 'react-router-dom'


const Internship_Main = () => {
  return (
    <div className="intern_home">
        <div className="info">
            <div className="heading">
                <h1>Direct <span>Hiring</span> App for Founders,
                    Team Leaders and Hiring Managers</h1>
            </div>
            <div className="sub-info">
             <p>Hirect simplifies the hiring process. Directly chatting with verified candidates matched by the AI algorithm ensures a simple, quick and effective hiring experience</p>
            </div>
        </div>
        <div className="search_bar">
            <div className="search">
                
                <div className="input_stream">
                    <div className="icon">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="input_feild">
                        <input className='input' placeholder='Candidates Skillset' />
                    </div> 
                    
                </div>
                <div className="input_stream">
                    <div className="icon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="input_feild">
                        <input className='input' placeholder='Hiring Location' />
                    </div> 
                    
                </div>
                <div className="search_button">
                    <Link className='search_btn' to='/internshipPage'>Get Started</Link>
                </div>
                
            </div>
        </div>
        <div className="stars">
            <div className="content">
                <div className="icon">
                    <img src='https://www.hirect.in/_nuxt/img/verified-recruiters.007d876.svg'/>
                </div>
                <div className="count">
                    <b>190k+</b>
                </div>
                <div className="info">
                    Verified Recruters
                </div>
            </div>
            <div className="content">
                <div className="icon">
                    <img src='https://www.hirect.in/_nuxt/img/jobs-posted.d87985b.svg'/>
                </div>
                <div className="count">
                    <b>500k+</b>
                </div>
                <div className="info">
                    Job Posted
                </div>
            </div>
            <div className="content">
                <div className="icon">
                    <img src='https://www.hirect.in/_nuxt/img/chat-conversations.b5998e5.svg'/>
                </div>
                <div className="count">
                    <b>25M+</b>
                </div>
                <div className="info">
                    Chat Conversation
                </div>
            </div>
            <div className="content">
                <div className="icon">
                    <img src='https://www.hirect.in/_nuxt/img/job-seekers.a85291b.svg'/>
                </div>
                <div className="count">
                    <b>3.8M+</b>
                </div>
                <div className="info">
                    Job Seekers
                </div>
            </div>
        </div>


        <div className="sub-heading">
            <h1>Popular Ctegories</h1>
        </div>


        <div className="categories">
            <div className="catego">
                <div className="image">
                    <img src="https://internshala.com/static/images/home/internships/categories/part_time.svg" alt="" />
                </div>
                <div className="catego-name">
                Part Time
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src="https://internshala.com/static/images/home/internships/categories/engineering.svg" alt="" />
                </div>
                <div className="catego-name">
                Engineering
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src="https://internshala.com/static/images/home/internships/categories/ngo.svg" alt="" />
                </div>
                <div className="catego-name">
                Ngo
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src="https://internshala.com/static/images/home/internships/categories/business_mba.svg" alt="" />
                </div>
                <div className="catego-name">
                Business/MBA
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src="https://internshala.com/static/images/home/internships/categories/design.svg" alt="" />
                </div>
                <div className="catego-name">
                Design
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src="https://internshala.com/static/images/home/internships/categories/science.svg" alt="" />
                </div>
                <div className="catego-name">
                Science
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src="https://internshala.com/static/images/home/internships/categories/media.svg" alt="" />
                </div>
                <div className="catego-name">
                Media
                </div>
            </div>
            <div className="catego">
                <div className="image">
                    <img src="https://internshala.com/static/images/home/internships/categories/humanities.svg" alt="" />
                </div>
                <div className="catego-name">
                Humanities
                </div>
            </div>
        </div>
    </div>
  )
}

export default Internship_Main