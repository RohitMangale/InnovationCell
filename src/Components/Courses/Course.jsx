import React from 'react'
import './Course.css'
import Drone from '../../assets/drone.png'
import Pilot from '../../assets/pilot.png'
import {Link} from 'react-router-dom'


const Course = () => {
  return (
    <div className="course">

        <div className="c-head">

            <div className="c-bar">
            <h2>Our Services</h2>
            <p>Contemporary learning spaces inspired by the traditional Indian Gurukul system offer a conducive environment for holistic development without boundaries.</p>
            
            </div>
           
        </div>
        
        <div className="c-row">

            <div className="c-img">
                <img src="https://img5.goodfon.com/original/1600x900/a/c5/streets-house-drone-aerial-view-city.jpg"  />

            </div>         


            <div className="c-box">
            <div className="c-inner">
                <div className="c-icon">
                <img src={Drone} className='c-iconn'/>
                </div>
                <div className="c-text">
                    <h2>Aerial Robotics – Junior</h2>
                    <p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>
                    <a className='c-span'>Read More</a>
                </div>
                </div>
            </div>

 

            <div className="c-box">
                <div className="c-inner">
                <div className="c-icon">

                <img src={Drone} className='c-iconn'/>
                </div>
                <div className="c-text">
                    <h2>Aerial Robotics – Junior</h2>
                    <p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>
                    <a className='c-span'>Read More</a>
                </div>
                </div>
            </div>

            <div className="c-box ">
            <div className="c-inner">
            
                <div className="c-icon">
                <img src={Pilot} className='c-iconn'/>
                </div>
                <div className="c-text">
                    <h2>Familiarization Training</h2>
                    <p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>
                    <a className='c-span'>Read More</a>
                </div>
                </div>
            </div>

            <div className="c-box">
            <div className="c-inner">
                <div className="c-icon">
                <img src={Drone} className='c-iconn'/>
                </div>
                <div className="c-text">
                    <h2>Aerial Robotics – Junior</h2>
                    <p>The majority have suffered alteration in some form, by injected humour, words which don't look even slightly.</p>
                    <a className='c-span'>Read More</a>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Course
