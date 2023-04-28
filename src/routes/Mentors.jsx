import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Mentor_1 from '../Components/Mentor_1/Mentor_1'

import Footer from '../Components/Footer/Footer'
import MentorWho from '../Components/MentorWho/MentorWho'
import MentorRole from '../Components/MentorRole/MentorRole'
import MentorD from '../Components/MentorD/MentorD'
import MentorPro from '../Components/MentorPro/MentorPro'
import MentorBen from '../Components/MentorBen/MentorBen'


const Mentors = () => {
  return (
    <div>
      <Navbar />
      <MentorWho />
      <MentorRole />
      <MentorD />
      <MentorBen />
      <Mentor_1 />
      <Footer />
    </div>
  )
}

export default Mentors
