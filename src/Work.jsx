import React,{useState} from 'react'
import infosys from './Assests/infosys.jpeg'
import northeastern_university from './Assests/northeastern_university.jpeg'
import burnes from './Assests/the_burnes.jpeg'

const Work = () => {

  const [workDesc,setWorkDesc] = useState('');
  const [stay,setStay] = useState(false);


 const onMouseLeave=(str)=>{
    setWorkDesc('')
  }

  const changeWorkDesc = (str) =>{
    if(stay != true){
      setWorkDesc('')
    }
  }


  return (
    <>
      <div className='my-work'>
        <div className='work-cards'>
          <article className='work-card' onMouseEnter={() => setWorkDesc('WebDevCoOp')} onMouseLeave={() => changeWorkDesc('')} onClick={()=>{setStay(true)}}>
            <img className='comp-logo' src={burnes} alt='infosys' />
            <h4>Web Developer Co-Op</h4>
            <h3>The Burnes Center for Social Change</h3>
            <h5>Full Time</h5>
            <b><small>Jan 2024 - Current</small></b>
            {/* <div className='work-overlay'>
            <p className='work-desc'>Created VueJs, TS, JS, HTML, CSS sites, matched Figma designs, improved multi-device UX, added banners/subscriptions, used DirectUs for data, optimized with Docker, hosted on Netlify, team feedback integration.</p>
            </div> */}
          </article>
          <article className='work-card' onMouseEnter={() => setWorkDesc('WebDevIntern')} onMouseLeave={() => changeWorkDesc('')} onClick={()=>{setStay(true)}} >
            <img className='comp-logo' src={northeastern_university} alt='infosys' />
            <h4 className='work-title'>Web Developer Intern</h4>
            <h3>The Burnes Center for Social Change</h3>
            <h5 className='work-type'>Part Time</h5>
            <b><small className='work-duration'>Aug 2023 - Dec 2023</small></b><br></br>
            
          </article>
          {/* <article className='work-card'>
            <img className='comp-logo' src={northeastern_university} alt='infosys' />
            <h4>Student Proctor</h4>
            <h5>Part Time</h5>
            <b><small>Jan 2023 - Jun 2023</small></b><br></br>
          </article> */}
          <article  className='work-card' onMouseEnter={() => setWorkDesc('Infosys')} onMouseLeave={() => changeWorkDesc('')} onClick={()=>{setStay(true)}}>
            <img className='comp-logo' src={infosys} alt='infosys' />
            <h4>Software Developer</h4>
            <h3>Infosys</h3>
            <h5>Full Time</h5>
            <b><small>Mar 2021 - Jun 2022</small></b><br></br>
          </article>
        </div>
        <div className='work-desc'>
        {workDesc === 'WebDevIntern'? 
        <ul>
          <li>
          Crafted adaptive sites with VueJs and TypeScript, matching Figma layouts; enhanced UX for multiple devices with features like banners and live data.
          </li>
          <li>Managed DirectUs data and refined workflows via Docker; deployed on Netlify and refined based on team feedback.</li>
          <li>My Work:
          <ul className='intern-work'>
          <li>
          Reboot Democracy Website
          <a href = "https://rebootdemocracy.ai/" className='btn btn-primary' target="_blank">Live Demo</a>
          </li>
          <li>
          Power at Work
          <a href = "https://poweratwork.us/" className='btn btn-primary' target="_blank">Live Demo</a>
          </li>
          </ul>
          </li>
        </ul>

        :workDesc==='WebDevCoOp'? <ul>
          <li>WordPress - Adding, updating, and organizing website content, ensuring it is SEO-friendly, and using WordPress's editor effectively to manage pages and posts.</li>
          <li>Engineering responsive websites with VueJs and TypeScript, aligning with Figma designs for optimal UX on various devices.</li>
          <li>Enhancing sites with interactive features and real-time data, managing content via DirectUs.</li>
          <li>Streamlining deployment with Docker on Netlify, improving iteratively through team feedback.</li>
        </ul>

        :workDesc==='Infosys'? <ul>
          <li>Crafted an Angular-based compliance site, boosting user engagement by 20%.</li>
          <li>Refined database management, improving financial report delivery and saving over 15 hours weekly.</li>
          <li>Enhanced Microservices proficiency, reducing API latency by 40% with Express and Spring</li>
          <li>Implemented Scrum, accelerating project completion and market readiness by 30% and 20%, respectively.</li>
          <li>Authored Docker and Yaml for a more efficient CI/CD flow, decreasing deployment times by 30% in AWS.</li>
        </ul>
    
        :''}
        </div>
      </div>
    </>
  )
}

export default Work