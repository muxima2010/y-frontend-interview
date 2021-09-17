import "../../../assets/styles/MyStyles.css";
import { randomFacts, callGeneratedFacts } from "../../../assets/js/functions";
import { useState } from "react";

export default function Timeline({ facts }) {
  return (
    <div className="timeline">
      <h3 className="timeline-title">TIMELINE GENERATED</h3>
      <ul id="timelineYears" className="timeLine-list">
        {facts.map((data, index) => {
          return (
            <li key={data.number.toString()}>
              <button
                id={index}
                className="year-button"
                onClick={callGeneratedFacts({ index })}
              >
                {data.number}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
