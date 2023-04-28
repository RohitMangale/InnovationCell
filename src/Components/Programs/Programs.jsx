import React from 'react'
import './Programs.css'
import Redtick from '../../assets/red-tick.png'
import Greentick from '../../assets/green-tick.png'
import {SlCalender} from 'react-icons/sl'
import {Link} from 'react-router-dom'

import {ImBooks} from 'react-icons/im'

const Programs = () => {
    return (
        <div className="programs">
            <h2 className='pr-heading'>
                Post Graduate Programs
            </h2>

            <p>Learn from global experts and get certified by the world's leading universities</p>

            <div className="pr-line">
                <span> <img src={Greentick} /> University Certificates</span>
                <span> <img src={Greentick} /> University Alumni Status</span>
                <span> <img src={Greentick} /> Masterclasses from University</span>
                <span> <img src={Greentick} /> Career Support</span>
            </div>

            <div className="pr-row">

            <Link to='/cd'>
                <div className="pr-box">
                    <div className="pr-top"></div>

                    <div className="pr-text">
                        <h4>Full Stack Java Developer Career Bootcamp</h4>
                        <div className="pr-two">
                            <span> <SlCalender className='img'/> 11 Months  </span>
                            <span> <ImBooks className='img'/>12 Courses  </span>
                        </div>
                        <div className="pr-tick">
                            <span> <img src={Redtick} /> Full Stack Career Bootcamp </span>
                            <span> <img src={Redtick} /> 7 toos & 4 Industry Projects</span>
                            <span> <img src={Redtick} /> Master's Certificate</span>
                        </div>
                    </div>

                </div>
                </Link>

                <Link to='/cd'>
                <div className="pr-box">
                    <div className="pr-top"></div>

                    <div className="pr-text">
                        <h4>Full Stack Java Developer Career Bootcamp</h4>
                        <div className="pr-two">
                            <span> <SlCalender className='img'/> 11 Months  </span>
                            <span> <ImBooks className='img'/>12 Courses  </span>
                        </div>
                        <div className="pr-tick">
                            <span> <img src={Redtick} /> Full Stack Career Bootcamp </span>
                            <span> <img src={Redtick} /> 7 toos & 4 Industry Projects</span>
                            <span> <img src={Redtick} /> Master's Certificate</span>
                        </div>
                    </div>

                </div>
                </Link>

                <Link to='/cd'>

                <div className="pr-box">
                    <div className="pr-top"></div>

                    <div className="pr-text">
                        <h4>Full Stack Java Developer Career Bootcamp</h4>
                        <div className="pr-two">
                            <span> <SlCalender className='img'/> 11 Months  </span>
                            <span> <ImBooks className='img'/>12 Courses  </span>
                        </div>
                        <div className="pr-tick">
                            <span> <img src={Redtick} /> Full Stack Career Bootcamp </span>
                            <span> <img src={Redtick} /> 7 toos & 4 Industry Projects</span>
                            <span> <img src={Redtick} /> Master's Certificate</span>
                        </div>
                    </div>

                </div>
                </Link>


            </div>
        </div>
    )
}

export default Programs
