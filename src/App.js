
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Background from './Background';
import Contact from './Contact';
import Home from './Home';
import './style.css';


function App() {
  return (
    
    <div className="App">
    <div className='background-theme'>
    <Background/>
       <Router>
        {/* <Nav /> */}
        {/* <Header/> */}
        {/* {<Contact />} */}
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<Contact />} />
         </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
