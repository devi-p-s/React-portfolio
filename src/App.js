
import './index.css';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Project from './routes/Project';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      

    </Routes>
    </div>
  );
  
}

export default App;

