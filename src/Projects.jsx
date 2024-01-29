import React from 'react'
import img1 from "./Assests/Neu_Deals.PNG"
import img2 from "./Assests/m&m.png"
import img3 from "./Assests/img-3.webp"

const Projects = () => {
  return (
    <div className='projects_container'>
      
        <div className='project_item'>
          <div className='project_item-image'>
            <img src= {img1} alt = ""></img>
          </div>
          <h3> Neu Deals</h3>
          <div className='project_item-cta'>
          <a href = "https://github.com" className='btn' target="_blank">GitHub</a>
          {/* <a href = "https://github.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </div>
        <div className='project_item'>
          <div className='project_item-image'>
            <img src= {img2} alt = ""></img>
          </div>
          <h3> Moments and Memories</h3>
          <div className='project_item-cta'>
          <a href = "https://www.figma.com/proto/MmM8Jqrb282gkthM4Z9PmJ/NamithaJC_Spring2023?type=design&node-id=566-1120&scaling=scale-down&page-id=278%3A3&starting-point-node-id=566%3A1120&show-proto-sidebar=1" className='btn' target="_blank">Figma</a>
          {/* <a href = "https://github.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </div>
        <div className='project_item'>
          <div className='project_item-image'>
            <img src= {img3} alt = ""></img>
          </div>
          <h3>One Stop Job</h3>
          <div className='project_item-cta'>
          <a href = "https://github.com/aiskunks/Jobs_Database/tree/main/One_stop_job" className='btn' target="_blank">Github</a>
          {/* <a href = "https://github.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </div>
        
      </div>
  )
}

export default Projects