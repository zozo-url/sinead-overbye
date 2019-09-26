import React from 'react'
import sinead from '../ss.jpg'

const About =  (props) =>{
  return (
    <div className="About">
        <div>
          <img src={sinead} alt="Sinead Overbye" />
          </div>
        <div>
          <p>description of work</p>
        <p>social media links</p></div>
    </div>
  )
}

export default About;
