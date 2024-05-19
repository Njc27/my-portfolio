import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './style.css'
import Resume from './Assests/JajurChandrashekhar.Namitha.pdf'
import ME from './Assests/myPic.jpg'
import linkedin from './Assests/linkedin.png'
import github from './Assests/github.png'
import resume from './Assests/resume.png'
import contact from './Assests/contact-us.png'


const Home = () => {
  return (
    <header>
    <div className='container home_container'>
    <div className='portfolio'>
        <div className='header-content'>
            <h5>Hello, I'm</h5>
            <h1>NAMITHA JC</h1>
        </div>
    
    </div>

    <div className='home'>
        <div className='intro'>
            <p>
            As an adept Full Stack Software Engineer actively advancing my Master of Science at 
            Northeastern University, I specialize in debugging, optimization, and test automation. 
            With a knack for crafting code and scripts, I'm dedicated to tackling intricate problems with fervor. 
            My passion for innovation drives me to explore the latest in computer science, ensuring our 
            collaboration yields cutting-edge solutions. 
            Let's unite to transform your software aspirations into reality!
            </p>

            <div className='connect-icons'>
                <a href='https://www.linkedin.com/in/namitha-jc-9b478416b/'><img src={linkedin} alt="linkedin" className='icons'/> <p>LinkedIn</p> </a>
                <a href='https://github.com/Njc27'><img src={github} alt="github" className='icons'/> <p>Github</p></a>
                <a href={Resume} download ><img src={resume} alt="resume" className='icons'/> <p>Resume</p></a>
                <a href='./Contact'><img src={contact} alt="contact" className='icons'/> <p>Contact</p></a>  
            </div>
        </div>

        <div className='aboutme'>
          <div className='about_me-image'>
            <img src={ME} alt="about image"/>
          </div>
        </div>
    </div>
    </div>
    </header>
  )
}
export default Home