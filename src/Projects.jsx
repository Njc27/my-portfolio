import React from 'react'
import img1 from "./Assests/Neu_Deals.PNG"
import img2 from "./Assests/m&m.png"
import img3 from "./Assests/img-3.webp"
import img4 from "./Assests/3PointCinemas.png"
import img5 from "./Assests/Paxy.png"
import img6 from "./Assests/WellnessWallet.png"

const Projects = () => {

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
    <div className='projects-container'>
      {project_data.map(elem=>(
      <div className='project-details'>
        <div className='project-type'>
          <div className='project-img'>{elem.project_pic}</div>
          {/* <div className='project_link'>{elem.project_link}</div> */}
          <a href={elem.project_link} className='btn' target="_blank" rel="norefferer">GitHub</a>
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