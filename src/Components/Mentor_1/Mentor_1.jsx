import React from 'react'
import './Mentor_1.css'

import Ill1 from '../../assets/ill/mentor1.jpg'
import Ill2 from '../../assets/ill/mentor2.jpg'
import Ill3 from '../../assets/ill/mentor3.jpg'
import Ill4 from '../../assets/ill/mentor4.jpg'

const Mentor_1 = () => {
  return (
    <div className="mentor">
    
    <h2 className="men-heading">
    How it Works
    </h2>

  <div className="men-row">

    <div className="men-box">
      <div className="men-inner">
        <div className="men-icon">
          <img src={Ill1} className="men-iconn" />
        </div>
        <div className="men-text">
          <h2>Post Project</h2>
          <p>
          Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
          </p>

        </div>
      </div>
    </div>

    <div className="men-box">
      <div className="men-inner">
        <div className="men-icon">
          <img src={Ill2} className="men-iconn" />
        </div>
        <div className="men-text">
        <h2>Find & Here</h2>
          <p>
          Our relationship managers are trained to understand your
needs and will help you in
the hiring process
          </p>

        </div>
      </div>
    </div>

    <div className="men-box">
      <div className="men-inner">
        <div className="men-icon">
          <img src={Ill3} className="men-iconn" />
        </div>
        <div className="men-text">
          <h2>Award & Pay</h2>
          <p>
            Pick the right talent based on skills and experience and
aligned to the projects you
are hiring for.
          </p>

        </div>
      </div>
    </div>

    <div className="men-box">
      <div className="men-inner">
        <div className="men-icon">
          <img src={Ill4} className="men-iconn" />
        </div>
        <div className="men-text">


          <h2>Work & Approve</h2>
          <p>
          Hire the best job ready talent directly from SimpliRecruit
at zero cost to your
organization
          </p>

        </div>
      </div>
    </div>


    
  </div>
      
    </div>
  )
}

export default Mentor_1
