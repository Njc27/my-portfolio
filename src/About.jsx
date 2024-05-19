import React from 'react'
import {HiBriefcase} from 'react-icons/hi'
import {GiGraduateCap} from 'react-icons/gi'
import {SlGraduation} from 'react-icons/sl'
import infosys from './Assests/infosys.jpeg'
import burnes from './Assests/the_burnes.jpeg'
import './style.css'

const About = () => {
  return (
    <section id="aboutme">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_content'>
          <div className='about_cards'>
            <div className='card-category'>
              <h3>Work experience</h3>
              <div className='category-cards'>
              <article className='about_crd'>
              {/* <img className='comp-logo' src={burnes} alt='The Burnes Center for Social Change logo' /> */}
                <HiBriefcase className='about_icon'/>
                <h5>The Burnes Center for Social Change</h5>
                <b><small>Web Developer Intern</small></b><br></br>
                <b><small>Aug 2023 - May 2024</small></b><br></br>
                <small>Developed websites with interactivity, accessibility, and responsive design</small>
              </article>

              <article className='about_crd'>
                {/* <img className='comp-logo' src={infosys} alt='infosys logo' /> */}
                <HiBriefcase className='about_icon'/>
                <h5>Infosys</h5>
                <b><small>Software Engineer</small></b><br></br>
                <b><small>Mar 2021 - Jun 2022</small></b><br></br>
                <small> 1.3 years of experience at Pfizer Technologies, contracted 
                with Infosys as Software Developer</small>
              </article>
              </div>
            </div>
            <div className='card-category'>
              <h3>Education</h3>
              <div className='category-cards'>
              <article className='about_crd'>
                <SlGraduation className='about_icon'/>
                <h5>Post Graduation</h5>
                <b><small>Sep 2022 - May 2024</small></b><br></br>
                <small>Pursued Master's in Information Systems from Northeastern University, 
                Boston, United States</small>
              </article>

              <article className='about_crd'>
                <GiGraduateCap className='about_icon'/>
                <h5>Undergrad</h5>
                <b><small>August 2016 - Sep 2020</small></b><br></br>
                <small>Completed Bachelors of Engineering in Computer science from JSS Academy 
                of Technical Education, Bangalore, India</small>
              </article>
              </div>
            </div> 
        </div>
        

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About