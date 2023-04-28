import React from "react";
import './Talent.css'

import {SlNote} from 'react-icons/sl';
import {BsFillPinAngleFill} from 'react-icons/bs';
import {AiOutlineFileProtect} from 'react-icons/ai';

const Talent = () => {
  return (
    <div className="talent">



      <div className="t-right">
        <h2 className="t-heading">Up your work game, it’s free.</h2>

        <div className="t-box">
          <div className="t-text">
            <h4> <SlNote /> The best for every budget</h4>
            <p>
            Find high-quality services at every price point. No hourly rates, just project-based pricing.
            </p>
          </div>
        </div>

        <div className="t-box">

          <div className="t-text">
            <h4><BsFillPinAngleFill />Quality work done quickly</h4>
            <p>
            Find the right freelancer to begin working on your project within minutes.
            </p>
          </div>
        </div>

        <div className="t-box">

          <div className="t-text">
            <h4> <AiOutlineFileProtect /> Protected payments, every time</h4>
            <p>
            Always know what you'll pay upfront. Your payment isn't released until you approve the work.
            </p>
          </div>
        </div>

        <div className="t-box">

          <div className="t-text">
            <h4>  <AiOutlineFileProtect /> 24/7 support</h4>
            <p>
            Questions? Our round-the-clock support team is available to help anytime, anywhere.
            </p>
          </div>
        </div>

      </div>

      <div className="t-left">
        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" className="disappear"></img>
        <img src="https://images.unsplash.com/photo-1588495077262-e41593eb23c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGtlbnRpbmd8ZW58MHx8MHx8&w=1000&q=80" className="appear"></img>
      </div>

    </div>
  );
};

export default Talent;
