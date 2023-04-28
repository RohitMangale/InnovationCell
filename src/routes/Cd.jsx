import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Coursedesc from '../Components/CourseDesc/Coursedesc'
import Keyfeat from '../Components/Keyfeat/Keyfeat'
import Tutor from '../Components/Tutor/Tutor'
const Cd = () => {
  return (
    <div>
        <Navbar />
        <Coursedesc/>
        <Keyfeat/>
        <Tutor/>
        <Footer />
      
    </div>
  )
}

export default Cd
