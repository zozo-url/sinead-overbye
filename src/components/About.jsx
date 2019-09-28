import React from 'react'
import sineadImg from '../sss.jpg'

const About =  (props) =>{
  return (
    <div className="About">
        <div>
          <img className="sinead-img" src={sineadImg} alt="Sinead Overbye" />
          </div>
        <div className= "about-description">
          <p>Sinead Overbye (Te Aitanga-a-Māhaki, Rongowhakaata, Ngāti Porou, Te Ātiawa) is a writer and research assistant living in Wellington. She holds a BA in Art History and Spanish, and completed an MA at the International Institute of Modern Letters in 2018. Her poetry and fiction has been widely published. In 2019 she received a mentorship with the NZ Society of Authors, and is currently working on a novel. She will always be writing.</p>
        {/* <p>social media links</p> */}
        </div>
    </div>
  )
}

export default About;
