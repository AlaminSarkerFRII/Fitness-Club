import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData.js";
import rightArrow from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div id="programs" className="programs">
      {/* header */}
      <div className="program-header">
        <span className="stroke-text">Explore</span>
        <span>ourProgramsTo</span>
        <span className="stroke-text">shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
                <span><img src={rightArrow} alt="rightArrow" />Join Now</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
