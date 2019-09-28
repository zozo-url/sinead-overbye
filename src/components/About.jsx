import React from 'react'
import sineadImg from '../sss.jpg'
import 'font-awesome/css/font-awesome.min.css';

const About =  (props) =>{
  return (
    <div className="About">
        <img className="sinead-img" src={sineadImg} alt="Sinead Overbye"/>
        <p>Sinead Overbye (Te Aitanga-a-Māhaki, Rongowhakaata, Ngāti Porou, Te Ātiawa) is a writer and research assistant living in Wellington. </p>
          <p>She holds a BA in Art History and Spanish, and completed an MA at the International Institute of Modern Letters in 2018. Her poetry and fiction has been widely published. In 2019 she received a mentorship with the NZ Society of Authors, and is currently working on a novel. She will always be writing.</p>
          <a href='https://twitter.com/applecarcass'><i className='fa fa-twitter'></i></a>
    </div>
  )
}

export default About;
