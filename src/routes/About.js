import React from 'react'
import Navbar from '../components/Navbar'

import Heero2 from '../components/Heero2'

import Footer from '../components/Footer'
import Aboutcontent from '../components/Aboutcontent'
const About = () => {
  return (
    <div>
       <Navbar/>
       <div className="mask">
           <img className="into-img" src={"https://www.cmachinelearning.com/img/case/prmodel.jpg"} alt="intoimag"/> 
          
          </div>
        
   <Aboutcontent/>
   <Footer/>
    </div>
  )
}

export default About
