import { Link } from "react-router-dom"
import "./Aboutcontentstyles.css"
import React from 'react'

const Aboutcontent = () => {
  return (
<>
<div className="k"> Hy, I am a friendly developer</div>
    <div className="about">
       
      <div className="left">
        
        <h1>Who Am I?</h1>
        <p>i am a react deveoper .i create responsive website for my clients
        </p>
        <Link to={"/contact"}>
            <button className="btn">
                contact
            </button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src="https://th.bing.com/th/id/OIP.TBq5O7tye1G1kMROQOsDtwHaEY?rs=1&pid=ImgDetMain" alt=""/>
            </div>
            <div className="img-stack bottum">
                <img src="https://th.bing.com/th/id/OIP.3Hn79IuhTeqf_17amyz9zgHaFj?w=800&h=600&rs=1&pid=ImgDetMain" alt=""/>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutcontent
