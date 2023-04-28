import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import ContactUs from './routes/ContactUs'
import Drone from './routes/Drone'
import IndustryPage from './routes/IndustryPage'
import Mentors from './routes/Mentors'
import Students from './routes/Students'
import Form from './routes/Form'
import FAQS from './routes/FAQS'
import CurriculumPage from './routes/CurriculumPage'
import Rules from './routes/Rules'
import Store from './routes/Store'
import ProductCart from './routes/ProductCart'

import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Startup from './routes/Startup'
import Investor from './routes/Investor'
import Founder from './routes/Founder'
import StartProfile from './routes/StartProfile'
import InterDetails from './routes/InterDetails'
import InternMain from './routes/InternMain'
import InternshipPage from './routes/InternshipPage'
import UniversityPage from './routes/UniversityPage'
import Cd from './routes/Cd'
import Lectures from './routes/Lectures'
import MentorFilter from './routes/MentorFilter'
import InsurancePage from './routes/InsurancePage'
import ResearchDev from './routes/ResearchDev'
import IncubationPage from './routes/IncubationPage'




ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<App/>} />
     <Route path='/students' element={<Students/>} />
     <Route path='/industrypage' element={<IndustryPage/>} />
     <Route path='/mentors' element={<Mentors/>} />
     <Route path='/drone' element={<Drone/>} />
     <Route path='/faqs' element={<FAQS/>} />
     <Route path='/mentorfilter' element={<MentorFilter/>} />
     <Route path='/internshipPage' element={<InternshipPage/>} />
     <Route path='/internMain' element={<InternMain/>} />
     <Route path='/interDetails' element={<InterDetails/>} />
     <Route path='/universityPage' element={<UniversityPage/>} />
     <Route path='/startup' element={<Startup/>} />
     <Route path='/startuppro' element={<StartProfile/>} />
     <Route path='/store' element={<Store/>} />
     <Route path='/insurancePage' element={<InsurancePage/>} />
     <Route path='/researchDev' element={<ResearchDev/>} />
     <Route path='/incubationPage' element={<IncubationPage/>} />
     <Route path='/cd' element={<Cd/>} />
     <Route path='/lectures' element={<Lectures/>} />
     <Route path='/investor' element={<Investor/>} />
     <Route path='/founder' element={<Founder/>} />
     <Route path='/productcart' element={<ProductCart/>} />
     <Route path='/form' element={<Form/>} />
     <Route path='/contactus' element={<ContactUs/>} />
     <Route path='/curriculumpage' element={<CurriculumPage/>} />
     <Route path='/rules' element={<Rules/>} />
    </Routes>
   </BrowserRouter>

)
