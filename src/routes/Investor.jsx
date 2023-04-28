import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Slider/Slider'
import Footer from '../Components/Footer/Footer'
import IBenefits from '../Components/IBenefits/IBenefits'
import Ibutton from '../Components/Ibutton/Ibutton'
import IPeople from '../Components/IPeople/IPeople'

const Investor = () => {
  return (
    <div>
    <Navbar />
    {/* <Ibutton /> */}
    <Slider />
    
    <IBenefits />
    <IPeople />
    <Footer />
    </div>
  )
}

export default Investor
