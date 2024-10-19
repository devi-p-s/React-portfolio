import React from 'react'

import Navbar from '../components/Navbar'

import Heero2 from '../components/Heero2'

import Footer from '../components/Footer'
import Pricingcard from '../components/Pricingcard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
       <Navbar/>
       
       <div className="maskk">
           <img className="into-img" src={"https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"} alt="intoimag"/> 
          
          </div>
          <Work/>
   <Pricingcard/>
   <Footer/>
    </div>
  )
}

export default Project
