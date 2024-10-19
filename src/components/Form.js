import "./Form.css"
import React from 'react'

const Form = () => {
  return (
    <>
    
<div className="k"> Hy, contact me...</div>
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subjects</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="type your message here"/>
       <button className="btn">Submitt</button>
      </form>
    </div>
    </>
  )
}

export default Form
