import React from 'react';
import data from '../poems.json'
import ReactHtmlParser from 'react-html-parser'
const Works =  (props) =>{
  return (
    <div className="Works">
        <h1>Works</h1>
        {data.poems.map((poem, index) => {
          return <div>
            <p>{poem.title}</p>
          </div>
        })}
        {data.poems.map((poem, index) => {
          return <div>
            <h1>{poem.title}</h1>
            <p>{poem.publisher}, {poem.year}</p>
            <p>{ReactHtmlParser(poem.poem)}</p>
          </div>
        })}
    </div>
  )
}

export default Works;
