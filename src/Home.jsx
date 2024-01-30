import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './style.css'


const Home = () => {

    const data =[
        {menu:"About Me", comp:<About/>},
        {menu:"My Work", comp:<Work/>},
        {menu:"Projects", comp:<Projects/>},
        {menu:"My Skills", comp:<Skills/>},
        {menu:"Contact Me", comp:<Contact/>}
        
    ]

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <>
    <div className='portfolio'>
    <div className='header-content'>
        <h1>Namitha JC</h1>
        <h5>Software Developer</h5>
    </div>

        <div className='home'>
            <div className='home-nav'>
                <ul>
                   {data?.map(elem =>(
                    <div onClick={()=>setIndex(data.indexOf(elem))}>

                    <li className={index === data.indexOf(elem)?'active-li':''}>
                        {elem?.menu}
                    </li>
                    </div>
                   ))}
                </ul>
            </div>

            <div>
        <Carousel activeIndex={index} onSelect={handleSelect} controls = {false} indicators	= {false} class="carousel" data-interval="false" interval={null}>
        {data.map(elem =>(
        <Carousel.Item>
        <div className='component-type'>
            <div>{elem.comp}</div>
        </div>
        </Carousel.Item>
        ))}
    </Carousel>
    </div>
    </div>
    </div>
            </>
  )
}
export default Home