import React, { useState } from "react";
import data from "../poems.json";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import Poem from "./Poem";

const Works = props => {
  const [selectedPoem, setSelectedPoem] = useState(-1);
  return (
    <div>
      <ScrollUpButton
        ContainerClassName="scroll-up-button"
        TransitionClassName="scroll-up-animation"
        ShowAtPosition="850"
        EasingType="easeOutCubic"
        AnimationDuration="1000"
      />
      <div className="Works">
        <div className="work-list">
          <h1>Works</h1>
          {data.poems.map((poem, index) => {
            return (
              <div>
                <Link
                  to={"/works#" + poem.title}
                  onClick={poem => {
                    setSelectedPoem(index);
                    scroll.scrollTo(920);
                  }}
                  className="link"
                >
                  <p>{poem.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
        <Poem selectedPoem={selectedPoem}></Poem>
      </div>
    </div>
  );
};

export default Works;
