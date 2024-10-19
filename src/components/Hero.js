import "./Heroimage.css";
import React from 'react';
import {Link} from 'react-router-dom';

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="into-img" src={"https://th.bing.com/th/id/OIP.hA8Hs7vZITWzlijnhtws2AHaE7?w=800&h=533&rs=1&pid=ImgDetMain"} alt="intoimag"/> 
          </div>
           <div className="content"><p>HY I'M A Freelancer...</p>
           <h1>React Developer</h1>
           <div>
            <Link to={"/project"} className="btn">Projects</Link>
            <Link to={"/contact"} className="btn-light">contact</Link>
            </div>
            </div>
        
      
    </div>
  )
}

export default Heroimage
