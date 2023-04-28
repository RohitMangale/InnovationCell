import React from 'react'
import './Features.css'

import feat1 from '../../../assets/features/f1.png'
import feat2 from '../../../assets/features/f2.png'
import feat3 from '../../../assets/features/f3.png'
import feat4 from '../../../assets/features/f4.png'
import feat5 from '../../../assets/features/f5.png'
import feat6 from '../../../assets/features/f6.png'

const Features = () => {
  return (
    <section id="feature" class="section-p1">
    <div class="feature-box">
        <img src={feat1} alt=""/>
        <h6>Free Shipping</h6>
    </div>
    <div class="feature-box">
        <img src={feat2} alt=""/>
        <h6>Online Orders</h6>
    </div>
    <div class="feature-box">
        <img src={feat3} alt=""/>
        <h6>Save Money</h6>
    </div>
    <div class="feature-box">
        <img src={feat4} alt=""/>
        <h6>Promotions</h6>
    </div>
    <div class="feature-box">
        <img src={feat5} alt=""/>
        <h6>Happy Sell</h6>
    </div>
    <div class="feature-box">
        <img src={feat6} alt=""/>
        <h6>24/7 Support</h6>
    </div>
</section>
  )
}

export default Features
