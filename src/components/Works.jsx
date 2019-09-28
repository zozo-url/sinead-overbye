import React from 'react';
import data from '../poems.json'
import ReactHtmlParser from 'react-html-parser'
import {HashLink as Link} from 'react-router-hash-link'
import {TinyButton as ScrollUpButton} from 'react-scroll-up-button'

const Works =  (props) =>{
  return (
    <div>
      <ScrollUpButton 
      ContainerClassName="scroll-up-button"
      TransitionClassName='scroll-up-animation'
      ShowAtPosition="850"
      EasingType="linear"
      AnimationDuration="1000"
      />
    <div className="Works">
      <div className="work-list">
        <h1>Works</h1>
        {data.poems.reverse().map((poem, index) => {
          return <div>
            <Link to ={"/works#" + poem.title} className="link"><p>{poem.title}</p></Link>
          </div>
        })}
      </div>
        <div className="poems">
        {data.poems.reverse().map((poem, index) => {
            return <div>
              <p id={poem.title}></p>
              <p><br/></p>
            <div>
              <h1>{poem.title}</h1>
              <p>{poem.publisher}, {poem.year}</p>
              <br/>
              <p className="poem">{ReactHtmlParser(poem.poem)}</p>
            </div>
        </div>
         })}
        </div>
    </div>
  </div>
  )
}

export default Works;
