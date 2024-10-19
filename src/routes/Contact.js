import React from 'react'
import Navbar from '../components/Navbar'

import Heero2 from '../components/Heero2'

import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <div className="mask">
           <img className="into-img" src={" https://www.impelsys.com/wp-content/uploads/2023/12/Prototype-Testing_V1.png"} alt="intoimag"/> 
          
          </div>
      
   <Form/>
   <Footer/>
    </div>
  )
}

export default Contact
