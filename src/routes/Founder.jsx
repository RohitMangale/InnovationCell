import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Slider/Slider'
import Testimonials from '../Components/Testimonials/Testimonials'
import Footer from '../Components/Footer/Footer'
import FBenefits from '../Components/FounderBenefits/FBenefits'
import FPartners from '../Components/FPartners/FPartners'

const Founder = () => {
  return (
    <div>
    <Navbar />
    <Slider />
    <FBenefits />
    <FPartners />
    <Testimonials />
    <Footer />
    </div>
  )
}

export default Founder
