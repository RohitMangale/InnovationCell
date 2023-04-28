import React from 'react'
import './Navbar.css'


import {Link} from 'react-router-dom'

const Navbar = () => {


  return (

    <div class="wrapper">
    <nav>
      <input type="checkbox" id="show-search" />
      <input type="checkbox" id="show-menu" />
      <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
      <div class="content">
      <div class="logo"><a href="#"><Link to='/'>LOGO</Link></a></div>
        <ul class="links">
          <li><a ><Link to='/students'>Courses</Link></a></li>
          <li><a ><Link to='/industryPage'>Industry</Link></a></li>
          <li><a ><Link to='/internMain'>Internship</Link></a></li>
          <li><a ><Link to='/mentors'>Mentor</Link></a></li>
          <li><a ><Link to='/universityPage'>University</Link></a></li>
          <li><a ><Link to='/startup'>Startup</Link></a></li>
          {/* <li>
            <a href="#" class="desktop-link">Dashboard</a>
            <input type="checkbox" id="show-features" />
            <label for="show-features">Dashboard</label>
            <ul>
              <li><a href="#">Admin</a></li>
              <li><a href="#">Students</a></li>
              <li><a href="#">Mentors</a></li>
              <li><a href="#">Universities</a></li>
              <li><a href="#">Industries</a></li>
            </ul>
          </li> */}
          
        </ul>
      </div>
      <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
      <form action="#" class="search-box">
        <input type="text" placeholder="Type Something to Search..." required />
        <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
      </form>
    </nav>

    </div>
  )
}

export default Navbar
