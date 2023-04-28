import React from 'react'
import Header from './Components/Header/Header'
import Testimonials from './Components/Testimonials/Testimonials'
import Navbar from './Components/Navbar/Navbar'
import Partners from './Components/Partners/Partners'
import Course from './Components/Courses/Course'
import Img from './Components/Img/Img'
import We from './Components/We/We'
import Footer from './Components/Footer/Footer'
import Programs from './Components/Programs/Programs'
import Game from './Components/Game/Game'
import Talent from './Components/Talent/Talent'
import Blog from './Components/Blog/Blog'
import Hire from './Components/Hire/Hire'
import Why from './Components/Why/Why'
import Banner1 from './Components/Banner1/Banner1'
import Universitie from './Components/Universitie/Universitie'
import Startup1 from './Components/Startup1/Startup1'
import Startup2 from './Components/Startup2/Startup2'
import Slider from './Components/Slider/Slider'
import Faqk from './Components/Faqk/Faqk'
import DevFaqks from '../src/Components/Faqk/DevFaqk'
import {APie} from '../src/Components/Faqk/faqkapi'

function App() {

  return (
    <div className="App">
    <Navbar />
    {/* <Header /> */}
    <Slider /> 
    <We />
    <Course /> 
    <Programs /> 
    <Banner1 />
    <Game /> 
    <Talent /> 
    {/* <Img /> 
    <Hire /> 
    <Universitie/>
        <Why /> 
      <Learning />*/}
      <Faqk />

        <Testimonials />
        <Blog />
        <Partners />
        <Footer />
    </div>
  )
}

export default App
