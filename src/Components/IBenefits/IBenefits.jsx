import React from 'react'

import './IBenefits.css'

import Ill1 from '../../assets/ill/mentor1.jpg'
import Ill2 from '../../assets/ill/mentor2.jpg'
import Ill5 from '../../assets/ill/ill-3.png'
import Ill6 from '../../assets/ill/ill-4.png'
import Ill3 from '../../assets/ill/mentor3.jpg'
import Ill4 from '../../assets/ill/mentor4.jpg'

const IBenefits = () => {
  return (
    <div className='ibenefits'>
        <h2 className="ib-heading">BENEFITS FOR STARTUPS</h2>

<div className="ib-row">


        <div className="ib-inner">
            <div className="ib-icon">
                <img src={Ill5} className="ib-iconn" />
            </div>
            <div className="ib-text">
                <h2>Post Project</h2>
                <p>
                    Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                </p>


            </div>
        </div>

        <div className="ib-inner">
            <div className="ib-icon">
                <img src={Ill3} className="ib-iconn" />
            </div>
            <div className="ib-text">
                <h2>Post Project</h2>
                <p>
                    Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                </p>


            </div>
        </div>

        <div className="ib-inner">
            <div className="ib-icon">
                <img src={Ill6} className="ib-iconn" />
            </div>
            <div className="ib-text">
                <h2>Post Project</h2>
                <p>
                    Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                </p>


            </div>
        </div>

        <div className="ib-inner">
            <div className="ib-icon">
                <img src={Ill4} className="ib-iconn" />
            </div>
            <div className="ib-text">
                <h2>Post Project</h2>
                <p>
                    Our intense programs are taught by industry experts & candidates are job ready as they work on relevant projects.
                </p>


            </div>
        </div>


</div>

<div className="ib-timeline">
<img src="https://as2.ftcdn.net/v2/jpg/01/89/22/41/1000_F_189224188_9A8nJeIflSRSIgCp25oQRvqZH9OJ4lC3.jpg" alt="" />
</div>
      
    </div>
  )
}

export default IBenefits
