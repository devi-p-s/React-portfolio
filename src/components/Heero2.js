import "./Hero2.css";
import React, { Component } from 'react'

class Heero2 extends Component {
    render(){
        return (
            <div className="hero-img">
              <div className="heading">
                <h1>
                    {this.props.header}
                </h1>
                <p>{this.props.text}</p>
              </div>
            </div>
        )
    }

  
}


export default Heero2
