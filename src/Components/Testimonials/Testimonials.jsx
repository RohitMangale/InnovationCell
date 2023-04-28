import "./Testimonials.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";

import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1 className="t-heading">Better Service Starts Here </h1>


        <div className="t-slider">

          <div className="t-wrapper">
            <div className="w-left">
              <FaQuoteLeft />
            </div>

            <div className="w-right">
              <p>
                Indrones is one the most innovative company we have come across
                with their focus on customer problem solving. SCCL became on the
                leading Mining companies in India to deploy Drones for
                topographic surveying, pre-mining surveys and land acquisition
                strategies for new lease areas
              </p>
              <h2>GM, Surveys</h2>
              <h4>SCCL</h4>
            </div>
          </div>
          <div className="t-wrapper">
            <div className="w-left">
              <FaQuoteLeft />
            </div>

            <div className="w-right">
              <p>
                Indrones is one the most innovative company we have come across
                with their focus on customer problem solving. SCCL became on the
                leading Mining companies in India to deploy Drones for
                topographic surveying, pre-mining surveys and land acquisition
                strategies for new lease areas
              </p>
              <h2>GM, Surveys</h2>
              <h4>SCCL</h4>
            </div>
          </div>
        </div>

    </div>
  );
};

export default Testimonials;
