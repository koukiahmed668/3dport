import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text,link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
    )

const renderContent  = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Ahmed</span>👋
            <br></br>
            A Full Stack Web Developer
        </h1>
    ),
    2: (
        <InfoBox
        text="Skilled in .NET, Spring Boot, Angular, and AI-driven platforms, I create scalable applications with real-time features."
        link="/projects"
        btnText="Learn more"
         />
    ),
    3 : (
        <InfoBox
        text="Strong in scalable architecture, microservices & real-time applications."
        link="/projects"
        btnText="Check out my projects"
         />
        ),
    4 :(
        <InfoBox
        text="Looking to work together? Let's connect!"
        link="/contact"
        btnText="Hire me"
         />
        ),

}



const HomeInfo = ({currentStage}) => {
    
  return renderContent [currentStage] || null; 
}

export default HomeInfo