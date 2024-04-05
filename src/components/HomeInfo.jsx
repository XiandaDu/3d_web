import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am Xianda Du 👋
            <br/>
            a Computer Engineering student from the University of Waterloo
        </h1>
    ),
    2: (
        <InfoBox
            text = "I am familiar with React, Spring Boot, and Vue. Here are my detailed skills and past work experiences"
            link = "/about"
            btnText= "learn more"
        />
    ),
    3: (
        <InfoBox
            text = "My portfolio boasts a rich collection of projects, each showcasing my various skills. Care to take a peek?"
            link = "/projects"
            btnText= "Visit my Projects"
        />
    ),
    4: (
        <InfoBox
            text = "Interested in connecting further? Feel free to reach out! You can contact me in 10 seconds!"
            link = "/contact"
            btnText= "Let's chat"
        />
    )
}



const HomeInfo = ( {currentStage} ) => {
  return renderContent[currentStage] || null
}

export default HomeInfo