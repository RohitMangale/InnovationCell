import React from "react";

import { Link } from "react-router-dom";

import "./Startup1.css";
import Illustration4 from "../../assets/ill/ill-4.png";
import Illustration2 from "../../assets/ill/ill-2.jpg";
import Illustration3 from "../../assets/ill/ill-3.png";

const Startup1 = () => {
  return (
    <div className="startup1">
        
      <div className="st-boxs">
        <div className="st-bg">
            <div className="st-title">
                <div className="st-titu">
                    Startup
                </div>
            </div>
          <div className="st-box">
            <div className="st-icon">
              <img src={Illustration3} alt="" />
            </div>

            <div className="st-text">
              Mentorship, Advisory, assistance, Resilience and Growth Portal for
              startups is a one-stop platform to facilitation and guidance
              across all sectors, functions, stages, and geographies.
            </div>

            <Link to='/founder' className="st-button">Join <span> to raise funds</span></Link>
          </div>
        </div>
      </div>


      <div className="st-boxs">
        <div className="st-bg">
            <div className="st-title">
                <div className="st-titu">
                    Investor
                </div>
            </div>
          <div className="st-box">
            <div className="st-icon">
              <img src={Illustration2} alt="" />
            </div>

            <div className="st-text">
              Mentorship, Advisory, assistance, Resilience and Growth Portal for
              startups is a one-stop platform to facilitation and guidance
              across all sectors, functions, stages, and geographies.
            </div>

            <Link to='/investor' className="st-button">Join <span> to invest</span></Link>
          </div>
        </div>
      </div>


 


    </div>
  );
};

export default Startup1;
