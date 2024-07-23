import React from 'react'
import img1 from "./Assests/Neu_Deals.PNG"
import img2 from "./Assests/m&m.png"
import img3 from "./Assests/img-3.webp"
import img4 from "./Assests/3PointCinemas.png"
import img5 from "./Assests/Paxy.png"
import img6 from "./Assests/WellnessWallet.png"
import img7 from "./Assests/innovate_us.svg"
import img8 from "./Assests/the-govlab-logo.svg"

const Projects = () => {

  const burnes_data = [
    {
      title: "Innovate US",
      project_pic: <img src={img7} />,
      project_link: "https://innovate-us.org/",
      techstack: ["Vue.js", "DirectUS", "GraphQL", "Node.js"],
      project_desc: (
        <span>
          I developed websites for InnovateUS, an initiative by the Burnes Center for Social Change at Boston. InnovateUS offers free, flexible learning on data, digital, innovation, and AI skills for public service professionals. The main site,{" "}
          <a href="https://innovate-us.org/course" target="_blank" rel="noopener noreferrer">Innovate Us</a>, provides access to self-paced courses, live workshops, and customized courses. Specific pages like Google Certificates - {" "}
          <a href="https://innovate-us.org/google-certificates" target="_blank" rel="noopener noreferrer">Google Certificates</a>, Innovation Skills Accelerator - {" "}
          <a href="https://innovate-us.org/course/innovation-skills-accelerator" target="_blank" rel="noopener noreferrer">Innovation Skills Accelerator</a>, and Maryland DoIT Partnership - {" "}
          <a href="https://innovate-us.org/partner/marylanddoit" target="_blank" rel="noopener noreferrer">Maryland DoIT Partnership</a> highlight various programs. I ensured all websites met web accessibility standards, enhancing usability for all users.
        </span>
      )
    },
    
    {
      title: "Reboot Democracy",
      project_pic: <img src={img8}/>,
      project_link: "https://rebootdemocracy.ai/",
      techstack: ["Vue.js", "DirectUS", "GraphQL", "Node.js"],
      project_desc:(
        <span>
          I developed websites for the Reboot Democracy initiative, which uses AI to enhance participatory democracy. The main site, {" "}
          <a href="(https://rebootdemocracy.ai/" target="_blank" rel="noopener noreferrer">Reboot Democracy</a>, showcases the mission to leverage AI for better governance, outcomes, and trust in institutions and communities. The - {" "}
          <a href="https://rebootdemocracy.ai/our-research" target="_blank" rel="noopener noreferrer">Our Research</a>, section details research on effective democratic practices. These websites highlight the potential of generative AI to reimagine and scale democratic engagement.
        </span>
      )
    },

    {
      title: "Power At Work",
      project_pic: <img src={img1}/>,
      project_link: "https://poweratwork.us/",
      techstack: ["Vue.js", "DirectUS", "GraphQL", "Node.js"],
      project_desc:(
        <span>
          I developed websites for the Power At Work initiative, promoting collective worker action in the U.S. The main site,  {" "}
          <a href="(https://poweratwork.us/" target="_blank" rel="noopener noreferrer">Power At Work</a>, as a resource hub advocating for worker empowerment and self-determination. The - {" "}
          <a href="https://poweratwork.us/theweeklydownload" target="_blank" rel="noopener noreferrer">The Weekly Download</a>, provides weekly updates on labor trends and worker movements, including {" "}
          < a href = "https://poweratwork.us/theweeklydownload/issue-56" target="_blank" rel="noopener noreferrer">Issue 56</a>,which covers recent worker activism. These websites contribute to a broader discourse on workplace fairness and economic justice.
        </span>
      )
    },
  ]

  const project_data=[
    {
    title:"Neu Deals",
    project_pic:<img src={img1}/>, 
    project_link:"https://github.com/Njc27/NeuDeals", 
    techstack:["ReactJs", "NodeJs", "MongoDb", "ExpressJs"],
    project_desc:"Developed a C2C platform with efficient image upload and Stripe integration, using ReactJS and MVC architecture, enhancing user satisfaction by 20%"
  },

  {
    title:"Moments and Memories",
    project_pic:<img src={img2}/>, 
    project_link:"https://www.figma.com/proto/MmM8Jqrb282gkthM4Z9PmJ/NamithaJC_Spring2023?type=design&node-id=566-1120&scaling=scale-down&page-id=278%3A3&starting-point-node-id=566%3A1120&show-proto-sidebar=1", 
    techstack:["Figma"],
    project_desc:"An app that helps users buy gifts online with various features which are perfect for gift enthusiasts"
  },

  {
    title:"One Stop Job",
    project_pic:<img src={img3}/>, 
    project_link:"https://github.com/aiskunks/Jobs_Database/tree/main/One_stop_job", 
    techstack:["Python", "Mysql", "Data Visualization"],
    project_desc:"Engineered a job category database by extracting data from LinkedIn, Indeed, and ZipRecruiter using Python tools like Selenium and BeautifulSoup to ensure access to current job market information."
  },

  {
    title:"3 Point Cinemas",
    project_pic:<img src={img4}/>, 
    project_link:"https://github.com/Njc27/3PointCinemas", 
    techstack:["Java","JavaFx"],
    project_desc:"Created a streamlined JavaFX cinema booking app for easy ticket purchases and management"
  },

  {
    title:"Paxy Cargo",
    project_pic:<img src={img5}/>, 
    project_link:"https://github.com/Njc27/PaxyCargo", 
    techstack:["React", "JavaScript"],
    project_desc:"Created a cargo tracking website using React and Google Maps API for real-time shipment updates and user-friendly access."
  },

  {
    title:"Wellness Wallet",
    project_pic:<img src={img6}/>, 
    project_link:"https://github.com/Njc27/Wellness-Wallet", 
    techstack:["Java","SpringBoot"],
    project_desc:"Developed an app to organize and access healthcare documents, ensuring easy storage and retrieval"
  },
  ]

  return (
    <>
    <section id="projects">
    <h5>My recent work</h5>
    <h2>Projects</h2>

    <p>WORK WEBSITES</p>
      <div className='burnes-projects-container'>
      {burnes_data.map(elem=>(
      <div className='project-details'>
        <div className='project-type'>
          {/* <div className='project-img'>{elem.project_pic}</div> */}
          {/* <div className='project_link'>{elem.project_link}</div> */}
          
        </div>
        <div className='about-project'>
          <h3>{elem.title}</h3>
          <div className='tech-stack'>
          {elem.techstack.map(tech=>(
            <div className='techstack'>{tech}</div>
          ))}
          </div>
          <div className='project-description'>
            {elem.project_desc}
          </div>
          <div className='link-button'>
          <a href={elem.project_link} className='btn' target="_blank" rel="norefferer">Link</a>
          </div>
        </div>
        
      </div>
      ))}
    </div>

    <p>PERSONAL PROJECTS </p>
    <div className='projects-container'>
      {project_data.map(elem=>(
      <div className='project-details'>
        <div className='project-type'>
          <div className='project-img'>{elem.project_pic}</div>
          {/* <div className='project_link'>{elem.project_link}</div> */}
          <a href={elem.project_link} className='btn' target="_blank" rel="norefferer">Link</a>
        </div>
        <div className='about-project'>
          <h3>{elem.title}</h3>
          <div className='tech-stack'>
          {elem.techstack.map(tech=>(
            <div className='techstack'>{tech}</div>
          ))}
          </div>
          <div className='project-description'>
            {elem.project_desc}
          </div>
        </div>
      </div>
      ))}
    </div>
    </section>
    </>
  )
}

export default Projects