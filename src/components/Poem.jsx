import React from "react";
import ReactHtmlParser from "react-html-parser";
import data from "../poems.json";

export default function Poem({ selectedPoem }) {
  return (
    <div className="poems">
      <div className="poem">
        <p className id={data.poems[selectedPoem].title}></p>
        <p>
          <br />
        </p>
        <div>
          <h1>{data.poems[selectedPoem].title}</h1>
          <p>
            {data.poems[selectedPoem].publisher} {data.poems[selectedPoem].year}
          </p>
          <br />
          <p className="selectedPoem">
            {ReactHtmlParser(data.poems[selectedPoem].poem)}
          </p>
        </div>
      </div>
    </div>
  );
}
