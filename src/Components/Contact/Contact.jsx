import React from "react";
import "./Contact.css";

import {BsInstagram} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'


const Contact = () => {
  return (
    <div className="main stratum ">
{/* 
    <div className="text">
        <h1>    Connect and Register With Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis qui, accusamus veritatis ut ipsa laborum sint nisi laudantium doloribus earum. Asperiores repellendus deserunt ab doloribus praesentium consequatur ipsa cum.</p>
    </div> */}

     <div className="contact stratum">
      <div className="c-info">
        <div className="c-left">
          <h1 className="title ">Contact Us</h1>
          <div>
            <h3 className="stratum">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              facilis repellat accusamus!
            </h3>
            <h3>+91 2348924592</h3>
            <h3>governmentiicportal@gmail.com</h3>
          </div>
        </div>

        <div className="c-right">
        <form action="#">
            <div className="formtop">
              <input className="form-tag" type="text" placeholder="E.g: TCS" required />

              <input className="form-tag" type="text" placeholder="6f789sds3g" required />
            </div>

            <input className="form-tag" type="text" placeholder="6f789sds3g" required />

            <textarea  type="text" placeholder="6f789sds3g" required rows={10}></textarea>
            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus. Animi hic iure rem cupiditate similique! <span>Lorem, ipsum dolor.</span></p>
            
          <div class="button lyon" type="submit">
            Submit Message
          </div>

          </form>
          

        </div>

      </div>

      <div className="c-icons">

            <a href="">
        <div className="icon">
                  <BsInstagram/>
        </div>
            </a>

            <a href="">
        <div className="icon">
                  <FaTwitter/>
        </div>
            </a>

        

            <a href="">
        <div className="icon">
                  <FaFacebookSquare/>
        </div>
            </a>
        <a href="">
        <div className="icon">
            
                  <AiFillYoutube/>
            
        </div>
        </a>
            <a href="" className="none">
        <div className="icon">
                  <FaLinkedin/>
        </div>
            </a>

        

      </div>
    </div>
    </div>

  );
};

export default Contact;
