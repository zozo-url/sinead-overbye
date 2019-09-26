import React from 'react';
import data from '../poems.json'
// 

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
            <p>{poem.year} published by: {poem.publisher}</p>
            <p>{poem.poem}</p>
          </div>
        })}
        {/* <p>mapped through list of works</p>
        <p> mapped through works </p>
        <p> scroll to top button </p> */}
    </div>
  )
}

export default Works;
