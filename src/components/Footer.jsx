import './Footer.css'
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaLinkedin, FaFacebook, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
               <div className='location'>
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div><p>123 House</p>
            <p>Kerala</p></div>
               </div>
               <div className='phone'>
                <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
               4567892245</h4>
              
               </div>
               <div className='email'>
                <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
               abhjjj@gmail.com</h4>
              
               </div>
        </div>
        <div className='right'>
            <h4>About the company</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam atque nam assumenda incidunt similique quidem! Fugit, ducimus! Sapiente repellendus illum pariatur perferendis accusantium neque laborum dolorum possimus, eos fugit.</p>
        <div className='social'>
      <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
      <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
      <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
       
             
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
