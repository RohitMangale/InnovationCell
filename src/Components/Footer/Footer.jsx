import React from 'react'
import './Footer.css'


import {Link} from 'react-router-dom'


const Footer = () => {
  return (



    <div className='Footer'>

        <div className="sub-links">
            {/* <div className="row"> */}
                <div className="con ">
                <h1>About Us</h1>
                <p>Debitis sunt mollitia laboriosam quo sequi voluptas cumque eaque non culpa veritatis aperiam ipsam rerum ipsa, aut corrupti, necessitatibus, numquam consequatur repudiandae quod! Quaerat voluptatum repellat mollitia.</p>
                </div>
                <div className="con">
                <h1>Shop</h1>
                <p><a className='link' ><Link to='/faqs'>FAQs</Link></a></p>
                <p><a className='link'><Link to='/contactus'>Contact Us</Link></a></p>
                <p><a className='link'><Link to='/rules'>Rules & Regulations</Link></a></p>
                <p><a className='link'><Link to='/curriculumpage'>Curriculum</Link></a></p>
                </div>
            {/* </div> */}
            {/* <div className="row"> */}
                <div className="con">
                <h1>Dashboards</h1>
                <p><a className='link' href='/'><Link to='/form'>Form</Link></a></p>
                <p><a className='link' href='/'><Link to='/mentorfilter'>Mentor Filter</Link></a></p>
                <p><a className='link' href='/'><Link to='/store'>Store</Link></a></p>
                <p><a className='link' href='/'><Link to='/drone'>Drone</Link></a></p>

                </div>
                <div className="con">
                <h1>Support</h1>
                <p><a className='link' ><Link to='/incubationPage'>Incubation</Link></a></p>
                <p><a className='link' ><Link to='/researchDev'>R&D</Link></a></p>
                <p><a className='link' ><Link to='/insurancePage'>Insuarance</Link></a></p>
                <p><a className='link' ><Link to='/mentors'>Mentor</Link></a></p>
                </div>
            {/* </div> */}
            <div className="con ">
                <h1>Subscribe</h1>
                <p><a className='link' ><Link to='/incubationPage'>Incubation</Link></a></p>
                <p><a className='link' ><Link to='/researchDev'>R&D</Link></a></p>
                <p><a className='link' ><Link to='/insurancePage'>Insuarance</Link></a></p>
                <p><a className='link' ><Link to='/mentors'>Mentor</Link></a></p>
            </div>
        </div>
        
        <div className="links">
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <div className="main-links">
                <a className='link' href='/'>Home</a>
                <a className='link' href='/'>About</a>
                <a className='link' href='/'>Features</a>
                <a className='link' href='/'>Service</a>
            </div>
            <div className="social-icons">
            <a className='link' href='/'><i class="fa-brands fa-whatsapp"></i></a>
            <a className='link' href='/'><i class="fa-brands fa-instagram"></i></a>
            <a className='link' href='/'><i class="fa-brands fa-facebook"></i></a>
            <a className='link' href='/'><i class="fa-brands fa-youtube"></i></a>    

            </div>
        </div>
        
        <div className="reserved">
            <p>© Name of Compony All Rights Reserved. | Design By DROP</p>
        </div>

    </div>
  )
}

export default Footer