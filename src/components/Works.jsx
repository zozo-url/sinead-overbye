import React from 'react';
import data from '../poems.json'
import ReactHtmlParser from 'react-html-parser'
const Works =  (props) =>{
  return (
    <div className="Works">
      <div className="work-list">
        <h1>works</h1>
        {data.poems.map((poem, index) => {
          return <div>
            <p>{poem.title}</p>
          </div>
        })}
      </div>
        <div className="poems">
        {data.poems.map((poem, index) => {
            return <div>
              <h1>{poem.title}</h1>
              <p>{poem.publisher}, {poem.year}</p>
              <p className="poem">{ReactHtmlParser(poem.poem)}</p>
            </div>
         })}
        </div>

    </div>
  )
}

export default Works;
