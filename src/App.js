
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Home from './Home';


function App() {
  return (
    <div className="App">
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
  );
}

export default App;
