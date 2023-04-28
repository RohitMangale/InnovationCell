import React from 'react'
import './Block.css'
import {Link} from 'react-router-dom'

import Button from './Button'
const Blok = () => {
  return (
    <div className="block">
        <div className="status">
            <i class="fa-solid fa-arrow-trend-up"></i>
            <span>Activily Hiring</span>
        </div>
        <div className="heading">
            <div className="post"><h1>Store Fashion Consultant</h1></div>
            <div className="company_name"><h2>Reliance Brands Limited</h2></div>
            <div className="location">
                <i class="fa-solid fa-location-dot"></i>  
                <p>Mumbai</p>         
            </div>
            
        </div>
        <div className="info">
                <div className="start_date">
                    <div className="logo">
                    <i class="fa-solid fa-circle-play"></i>
                    <p>Start Date</p>
                    </div>
                    <div className="sub-info">
                      <p>Immediately</p>
                    </div>

                </div>
                <div className="start_date">
                    <div className="logo">
                    <i class="fa-regular fa-calendar"></i>
                    <p>Duration</p>
                    </div>
                    <div className="sub-info">
                      <p>2 Month</p>
                    </div>

                </div>
                <div className="start_date">
                    <div className="logo">
                    <i class="fa-regular fa-money-bill-1"></i>
                    <p>Stipend</p>
                    </div>
                    <div className="sub-info">
                      <p>₹ 15,000/Month</p>
                    </div>

                </div>
            </div>


            <div className="btns">
              
              <a href='./Internship_details.jsx' className='fade-btn'>
              <Link className='fade-btn' to='/interDetails'>Get Started</Link>
              </a>

              <Button/>

            </div>
            

    </div>
  )
}

export default Blok