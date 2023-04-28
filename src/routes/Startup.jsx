import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Startup1 from '../Components/Startup1/Startup1'
import Startup2 from '../Components/Startup2/Startup2'
import Startup3 from '../Components/Startup3/Startup3'
import SCon from '../Components/SCon/SCon'
import Raising from '../Components/Raising/Raising'

const Startup = () => {
  return (
    <div>
        <Navbar />
        <Startup2 />
        <Startup1 />
        <Raising />
        <SCon />
        <Startup3 />
        <Footer />      
    </div>
  )
}

export default Startup
