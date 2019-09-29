import React from "react";
import ReactHtmlParser from "react-html-parser";
import data from "../poems.json";

export default function Poem({ selectedPoem }) {
  return (
    <div className="poems">
      <div>
        <p className id={data.poems[selectedPoem].title}></p>
        <p>
          <br />
        </p>
        <div>
          <h1>{data.poems[selectedPoem].title}</h1>
          <p>
            <a href={data.poems[selectedPoem].url} className="link">
              {data.poems[selectedPoem].publisher}
            </a>
            , {data.poems[selectedPoem].year}
          </p>
          {data.poems[selectedPoem].award && (
            <p>{data.poems[selectedPoem].award}</p>
          )}
          <br />
          <p className="poem">
            {ReactHtmlParser(data.poems[selectedPoem].poem)}
          </p>
        </div>
      </div>
    </div>
  );
}
