
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Background from './Background';
import Contact from './Contact';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import './style.css';


function App() {
  return (
    
    <div className="App">
    {/* <div className='background-theme'> */}
    <Background/>
    <Nav />
        <Home />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
       <Router>
        
        
        {/* <Header/> */}
        {/* {<Contact />} */}
      <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route element = {<About />} /> */}
          <Route element={<Contact />} />
         </Routes>
      </Router>
      {/* </div> */}
    </div>
  );
}

export default App;
