import React from "react";
import "./Internship_details.css";

const Internship_details = () => {
  return (
    <div className="int-details">
      <div className="heading">
        <h1>
          Store Fashion Consultant Internship in Mumbai at Reliance Brands
          Limited
        </h1>
      </div>
      <div className="view_details">
        <div className="int-header">
          <div className="status">
            <i class="fa-solid fa-arrow-trend-up"></i>
            <span>Activily Hiring</span>
          </div>
          <div className="heading">
            <div className="post">
              <h2>Graphic Design (Jewellery)</h2>
            </div>
            <div className="company_name">
              <h3>Titan Company Limited</h3>
            </div>
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
            <div className="start_date">
              <div className="logo">
                <i class="fa-solid fa-hourglass-end"></i>
                <p>Apply By</p>
              </div>
              <div className="sub-info">
                <p>1 May 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about_company">
          <div className="about_head">
            <h2>About Reliance Brands Limited</h2>
            <a href="/">
              Website <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <div className="about_info">
            <p>
              Reliance Industries Limited (RIL) is India's largest private
              sector company on all major financial parameters with a turnover
              of Rs. 2,58,651 crore ($ 58,000 million), cash profit of Rs.
              34,530 crore ($ 7,743 million), net profit of Rs. 20,286 crore ($
              4,549 million), and total assets of Rs. 2,84,719 crore ($ 63,846
              million). RIL is the first private sector company from India to
              feature in the Fortune Global 500 list of 'world's largest
              corporations and ranks 119th amongst the world's top companies in
              terms of profits. The group's activities span exploration and
              production of oil and gas, petroleum refining and marketing,
              petrochemicals (polyester, fiber, intermediates, plastics, and
              chemicals), textiles, retail, and special economic zones.
            </p>
          </div>
        </div>

        <div className="about_company">
          <div className="about_head">
            <h2>About the internship</h2>
          </div>
          <div class="text-container">
            Selected intern's day-to-day responsibilities include: <br />
            <br />
            1. Assisting customers in their purchase and service cycle
            <br />
            2. Working with the store team and manager on the store's operation
            activities
            <br />
            3. Working on handling store inventory and visual merchandising
            <br />
            4. Achieve the Targets laid for Store sales by closing the service
            cycle.
          </div>
        </div>

        <div className="about_company">
          <div className="about_head">
            <h2>Who can apply</h2>
          </div>
          <div class="text-container">
            Only those candidates can apply who: <br />
            <br />
            1. are available for full time (in-office) internship
            <br />
            2. can start the internship between 17th Apr'23 and 22nd May'23
            <br />
            3. are available for duration of 6 months
            <br />
            4. are from or open to relocate to Mumbai and neighboring cities
            <br />
            5. have relevant skills and interests
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship_details;
