import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Products from '../Components/Ecomm/Products/Products'


import Footer from '../Components/Footer/Footer'
import Features from '../Components/Ecomm/Features/Features'

const Store = () => {
  return (
    <div>
      <Navbar />
      <Features />
      <Products />
      <Footer />
    </div>
  )
}

export default Store
