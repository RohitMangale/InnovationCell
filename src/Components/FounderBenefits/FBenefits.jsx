import React from 'react'
import './FBenefits.css'

import Ill1 from '../../assets/ill/mentor1.jpg'
import Ill2 from '../../assets/ill/mentor2.jpg'
import Ill5 from '../../assets/ill/ill-3.png'
import Ill6 from '../../assets/ill/ill-4.png'
import Ill3 from '../../assets/ill/mentor3.jpg'
import Ill4 from '../../assets/ill/mentor4.jpg'


const FBenefits = () => {
    return (
        <div className='fbenefits'>
            <h2 className="fb-heading">BENEFITS FOR STARTUPS</h2>

            <div className="fb-row">

                <div className="fb-col">

                    <div className="fb-inner">
                        <div className="fb-icon">
                            <img src={Ill1} className="fb-iconn" />
                        </div>
                        <div className="fb-text">
                            <h2>Post Project</h2>
                            <p>
                                Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                            </p>


                        </div>
                    </div>

                    <div className="fb-inner">
                        <div className="fb-icon">
                            <img src={Ill2} className="fb-iconn" />
                        </div>
                        <div className="fb-text">
                            <h2>Post Project</h2>
                            <p>
                                Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                            </p>


                        </div>
                    </div>
                </div>                

                <div className="fb-col fb-down">

                    <div className="fb-inner">
                        <div className="fb-icon">
                            <img src={Ill3} className="fb-iconn" />
                        </div>
                        <div className="fb-text">
                            <h2>Post Project</h2>
                            <p>
                                Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                            </p>


                        </div>
                    </div>

                    <div className="fb-inner">
                        <div className="fb-icon">
                            <img src={Ill4} className="fb-iconn" />
                        </div>
                        <div className="fb-text">
                            <h2>Post Project</h2>
                            <p>
                                Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                            </p>


                        </div>
                    </div>
                </div>

                <div className="fb-col">

                    <div className="fb-inner">
                        <div className="fb-icon">
                            <img src={Ill5} className="fb-iconn" />
                        </div>
                        <div className="fb-text">
                            <h2>Post Project</h2>
                            <p>
                                Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                            </p>


                        </div>
                    </div>

                    <div className="fb-inner">
                        <div className="fb-icon">
                            <img src={Ill6} className="fb-iconn" />
                        </div>
                        <div className="fb-text">
                            <h2>Post Project</h2>
                            <p>
                                Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                            </p>


                        </div>
                    </div>
                </div>

            </div>

            <div className="timeline">
            <img src="https://slidebazaar.com/wp-content/uploads/2019/12/7-stage-timeline-infographic-template.jpg" alt="" />
            </div>
        </div>
    )
}

export default FBenefits
