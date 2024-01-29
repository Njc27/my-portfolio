import React from 'react'
import {HiBriefcase} from 'react-icons/hi'
import {GiGraduateCap} from 'react-icons/gi'
import {SlGraduation} from 'react-icons/sl'
import ME from './Assests/myPic.jpg'
import pp from './Assests/pp.jpeg'

const About = () => {
  return (
    <>
    <div className='about'>
    <div className='aboutMe'>
    <div className='my-pic'>
    <img className='img-1' src={ME} alt="my-image"/>

    </div>
    <div className='about-desc'>
    <p>
    Hello! I'm <span className='text-highlight'>Namitha Jajur Chandrashekhar</span>, a <span className='text-highlight'>Master of Science</span> in Information Systems candidate at 
    <span className='text-highlight'> Northeastern University</span>, am a proficient <span className='text-highlight'>Full Stack Software Engineer</span>. Skilled in debugging, 
    optimization, and test automation, I thrive in collaborative settings, backed by strong 
    communication abilities. My academic focus includes web design, web development using Spring Boot, UI/UX, and database systems. 
    Professionally, I'm contributing as a Full-time Web Developer Co-op, a role that evolved from my previous position as a part-time web developer intern and a 
    Software Developer at Infosys, contracted with Pfizer Technologies. My expertise spans 
    frontend and backend technologies, database management, and design tools.
    </p>
    </div>
    </div>
    </div>
    </>
  )
}

export default About