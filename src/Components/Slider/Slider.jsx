import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import {EffectFade, Autoplay} from "swiper";

const Slider = () => {

  

  return (
    <Swiper
      spaceBetween={0}
      allowTouchMove={false}
      centeredSlides={true}
      effect={"fade"}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectFade,Autoplay]}
      // modules={[EffectFade]}
      className="mySwiper slider"
    >
      <SwiperSlide>
        <div className="slide slide1">
          <div className="layover-y"></div>
          <div className="layover-x"></div>
          <div className="content">
          <div className="sl-text">
            <h1>Startup Fundraising Platform</h1>
            <p>
            Start and manage a professional fundraise to attract quality accredited investors.
            </p>
            <a href="#">Get Started</a>
          </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
          <div className="slide slide2">
          <div className="layover-y"></div>
          <div className="layover-x"></div>
          <div className="content">
          <div className="sl-text">
            <h1>Startup Fundraising Platform</h1>
            <p>
            Start and manage a professional fundraise to attract quality accredited investors.
            </p>
            <a href="#">Get Started</a>
          </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide slide3">
        <div className="layover-y"></div>
          <div className="layover-x"></div>
          <div className="content">
          <div className="sl-text">
            <h1>Startup Fundraising Platform</h1>
            <p>
            Start and manage a professional fundraise to attract quality accredited investors.
            </p>
            <a href="#">Get Started</a>
          </div>
          </div>
        </div>
      </SwiperSlide>


      
    </Swiper>
  );
};

export default Slider;
