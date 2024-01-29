import React from 'react'
import {BsCheck2All} from 'react-icons/bs'


const Skills = () => {
  return (
    <div className='my-skills'>
            <div className='container skills_container'>
        <div className='skills_frontend'>
          <h3>Frontend Development</h3>
          <div className='skills_content'>
          <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </article>
          
            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>CSS/SASS</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>ReactJs</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Angular</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </article>

          </div>
        </div>


        <div className='skills_backend'>
          <h3>Backend Development</h3>
          <div className='skills_content'>
          <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </article>
          
            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Node.js</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Java</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Express.js</h4>
            <small className='text-light'>Intermediate</small>
            </article>

          </div>
        </div>



        <div className='skills_tools'>
          <h3>Tools</h3>
          <div className='skills_content'>
          <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Git</h4>
            <small className='text-light'>Intermediate</small>
            </article>
          
            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Github</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Figma</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Adobe Photoshop</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>VS Code</h4>
            <small className='text-light'>Experienced</small>
            </article>

          </div>
        </div>

        <div className='skills_database'>
          <h3>Database</h3>
          <div className='skills_content'>
          <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>MySql</h4>
            <small className='text-light'>Experienced</small>
            </article>
          
            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>

        <div className='skills_devops'>
          <h3>Devops</h3>
          <div className='skills_content'>
          <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Kubernetes</h4>
            <small className='text-light'>Intermediate</small>
            </article>
          
            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Jenkins</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='skills_details'>
            <BsCheck2All className='skills_details_icon'/>
            <h4>Docker</h4>
            <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills