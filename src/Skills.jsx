import React, { useState, useEffect,useRef }from 'react'
import {BsCheck2All} from 'react-icons/bs'
import CircularProgressComp from "./CircularProgressComp";
// import SubSection from './SubSection';



const Skills = () => {

  function Counter() {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (counter >= 65) {
          clearInterval(intervalId);
        } else {
          setCounter(prevCounter => prevCounter + 1);
        }
      }, 30);
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [counter]); // Only re-run the effect if counter changes
  
    // return (
    //   <div id="number">{counter}%</div>
    // );
  }

  // const skillsData_frontend =[
  //   {skill:"React", percentage:"90%"},
  //   {skill:"Vue.js", percentage:"95%"},
  //   {skill:"AngularJs", percentage:"75%"}
  // ]

  const [skillsData_frontend, setSkills] = useState([
    { skill: "React", percentage: 90 },
    { skill: "Vue.js", percentage: 95 },
    { skill: "AngularJs", percentage: 75 }
  ]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setSkills(skillsData_frontend.map(skill => ({
  //       ...skill,
  //       percentage: `${Math.min(100, parseInt(skill.percentage) + 5)}`  // Increment percentage by 5
  //     })));
  //   }, 1000);  // Update every second

  //   return () => clearInterval(intervalId);  // Clean up the interval on component unmount
  // }, [skillsData_frontend]);

  const skillsData_backend =[
    {skill:"NodeJs", percentage:90},
    {skill:"SpringBoot", percentage:75},
    {skill:"ExpressJs", percentage:90}
  ]

  const skillsData_devops =[
    {skill:"AWS", percentage:80},
    {skill:"Jenkins", percentage:85},
    {skill:"Kubernetes", percentage:80},
    {skill:"Docker", percentage:80}
  ]

  const skillsData_program =[
    {skill:"Java", percentage:80},
    {skill:"Python", percentage:80},
    {skill:"Javascript", percentage:90},
    {skill:"Typescript", percentage:90},
  ]

  const skillsData_database =[
    {skill:"MySql", percentage:90},
    {skill:"MongoDb", percentage:90},
    {skill:"PostgreSql", percentage:85}

  ]


  /************************** */
  const ref1 = useRef(null);
    const [reload,setReload] = useState(false);
      // useEffect(() => {
      //   const observer = new IntersectionObserver(([entry]) =>
      //   setReload(!reload)
      //   );
      //   observer.observe(ref1.current);
      //   return () => {
      //     observer.disconnect();
      //   };
      // }, [ref1]);

      // const array = [
      //   {
      //       name:"React",
      //       value:90
      //   },
      //   {
      //       name:"Node Js",
      //       value:80
      //   },
      //   {
      //       name:"Express Js",
      //       value:80
      //   },
      //   {
      //       name:"Python",
      //       value:90
      //   },

      //   {
      //       name:"SpringBoot",
      //       value:90
      //   },
      //   {
      //       name:"Flask/Django",
      //       value:75
      //   },
      //   {
      //       name:"DevOps",
      //       value:80
      //   },
      //   {
      //       name:"MySql/PostGres/MongoDb",
      //       value:90
      //   },
      //   {
      //       name:"React Native",
      //       value:83
      //   }
      // ]

  return (
    <>
    <section id="skills">
    <h5>My expertise</h5>
    <h2>Skills</h2>
    <div ref={ref1} className='skills-container'>
        {/* <div className="sec-skills">
            <div className="skills-sec">
            {
            array.map(items =>(
            <div className='skill-subSection'>
            <CircularProgressComp name = {"React"} endValue = {items?.value} reload = {reload}/>
            <div style={{marginTop:"16px",wordBreak:"break-word",width:"100%",display:"flex",justifyContent:"center"}}>
                {items?.name}
            </div>  
            </div>
            ))
            }
            </div>
        </div>         */}
      


    <div className='dev-skills'>
    <h3>Frontend Development</h3>
    <div className='skill-list'>
      {skillsData_frontend.map((elem, index) =>(
    <div className='skill-subSection'>
            <CircularProgressComp name = {elem?.skill} endValue = {elem?.percentage} reload = {reload}/>
            <div style={{marginTop:"16px",wordBreak:"break-word",width:"100%",display:"flex",justifyContent:"center"}}>
                {elem?.skill}
            </div>
    </div>
    ))}
    </div>
    </div>

    <div className='dev-skills'>
    <h3>Backend Development</h3>
    <div className='skill-list'>
      {skillsData_backend.map(elem =>(
    <div className='skill-subSection'>
    <CircularProgressComp name = {elem?.skill} endValue = {elem?.percentage} reload = {reload}/>
    <div style={{marginTop:"16px",wordBreak:"break-word",width:"100%",display:"flex",justifyContent:"center"}}>
        {elem?.skill}
    </div>
</div>
    ))}
    </div>
   
    </div>

    <div className='dev-skills'>
    <h3>Programming Languages</h3>
    <div className='skill-list'>
      {skillsData_program.map(elem =>(
    <div className='skill-subSection'>
    <CircularProgressComp name = {elem?.skill} endValue = {elem?.percentage} reload = {reload}/>
    <div style={{marginTop:"16px",wordBreak:"break-word",width:"100%",display:"flex",justifyContent:"center"}}>
        {elem?.skill}
    </div>
</div>
    ))}
    </div>
    </div>

    <div className='dev-skills'>
    <h3>Database</h3>
    <div className='skill-list'>
      {skillsData_database.map(elem =>(
    <div className='skill-subSection'>
    <CircularProgressComp name = {elem?.skill} endValue = {elem?.percentage} reload = {reload}/>
    <div style={{marginTop:"16px",wordBreak:"break-word",width:"100%",display:"flex",justifyContent:"center"}}>
        {elem?.skill}
    </div>
</div>
    ))}
    </div>
    </div>

    <div className='dev-skills'>
    <h3>Devops</h3>
    <div className='skill-list'>
      {skillsData_devops.map(elem =>(
    <div className='skill-subSection'>
    <CircularProgressComp name = {elem?.skill} endValue = {elem?.percentage} reload = {reload}/>
    <div style={{marginTop:"16px",wordBreak:"break-word",width:"100%",display:"flex",justifyContent:"center"}}>
        {elem?.skill}
    </div>
</div>
    ))}
    </div>
    </div>

    </div>
    </section>
    </>
  )
}

export default Skills