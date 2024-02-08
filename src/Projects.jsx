import React from 'react'
import img1 from "./Assests/Neu_Deals.PNG"
import img2 from "./Assests/m&m.png"
import img3 from "./Assests/img-3.webp"
import img4 from "./Assests/3PointCinemas.png"
import img5 from "./Assests/Paxy.png"
import img6 from "./Assests/WellnessWallet.png"

const Projects = () => {
  return (
    <div className='projects_container'>
      
        <div className='project_item'>
          <div className='project_item-image'>
            <img src= {img1} alt = ""></img>
          </div>
          <h3> Neu Deals</h3>
          <div className='project_item-cta'>
          <a href = "https://github.com/Njc27/NeuDeals" className='btn' target="_blank" rel="noopener noreferrer">GitHub</a>
          {/* <a href = "https://github.com" className='btn btn-primary'  target="_blank">Live Demo</a> */}
          </div>
        </div>
        <div className='project_item'>
          <div className='project_item-image'>
            <img src= {img2} alt = ""></img>
          </div>
          <h3> Moments and Memories</h3>
          <div className='project_item-cta'>
          <a href = "https://www.figma.com/proto/MmM8Jqrb282gkthM4Z9PmJ/NamithaJC_Spring2023?type=design&node-id=566-1120&scaling=scale-down&page-id=278%3A3&starting-point-node-id=566%3A1120&show-proto-sidebar=1" className='btn' target="_blank" rel="noopener noreferrer">Figma</a>
          {/* <a href = "https://github.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </div>
        <div className='project_item'>
          <div className='project_item-image'>
            <img src= {img3} alt = ""></img>
          </div>
          <h3>One Stop Job</h3>
          <div className='project_item-cta'>
          <a href = "https://github.com/aiskunks/Jobs_Database/tree/main/One_stop_job" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
          {/* <a href = "https://github.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </div>
        <div className='project_item'>
          <div className='project_item-image'>
            <img src= {img4} alt = ""></img>
          </div>
          <h3>3Point Cinemas</h3>
          <div className='project_item-cta'>
          <a href = "https://github.com/Njc27/3PointCinemas" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
          {/* <a href = "https://github.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </div>
        <div className='project_item'>
          <div className='project_item-image'>
            <img src= {img5} alt = ""></img>
          </div>
          <h3>Paxy Cargo</h3>
          <div className='project_item-cta'>
          <a href = "https://github.com/Njc27/PaxyCargo" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
          {/* <a href = "https://github.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </div>
        <div className='project_item'>
          <div className='project_item-image'>
            <img src= {img6} alt = ""></img>
          </div>
          <h3>Wellness Wallet</h3>
          <div className='project_item-cta'>
          <a href = "https://github.com/Njc27/Wellness-Wallet" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
          {/* <a href = "https://github.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </div>
        
      </div>
  )
}

export default Projects