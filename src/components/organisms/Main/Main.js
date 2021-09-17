import { useState } from "react";
import "./style.css";
import "../../../assets/styles/MyStyles.css";
import { Title } from "../../atoms/Title/Title";
import { Subtitle } from "../../atoms/Subtitle/Subtitle";
import { Button } from "../../atoms/Button";
import Timeline from "../../atoms/Timeline/Timeline";

import {
  generateRandomFact,
  closeRandomFact,
  eliminateRandomFact,
  callGeneratedFacts,
  randomFacts,
  length,
} from "../../../assets/js/functions.js";

const Main = () => {
  const [randomFacts, setRandomFacts] = useState([]);
  const getFact = async () => {
    if (length <= 5) {
      const fact = await generateRandomFact();
      setRandomFacts((prev) => [...prev, fact]);
    } else {
      alert("Array full!\nPlease delete some data.");
    }
  };

  const deleteFacts = () => {
    randomFacts.length = 0;
    eliminateRandomFact();
    setRandomFacts((prev) => []);
  };
  return (
    <div className="main">
      <div id="mainLeftDiv" className="div  div-left--background">
        <button
          id="close-button"
          className="close-button"
          onClick={closeRandomFact}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="none"
            stroke="#333333"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L49 49M49 1L1 49" strokeWidth="2" />
          </svg>
        </button>
        <ul className="title-list">
          <li>
            <Title styleTitle={"title"} text="Random" />
          </li>
          <li>
            <Title styleTitle={"title"} text="Year" />
          </li>
          <li>
            <Title styleTitle={"title"} text="Facts" />
          </li>
        </ul>
        <div className="random-fact--description">
          <h1 className="title title-black" id="yearTitle">
            {" "}
          </h1>
          <p className="factText" id="randomFactText"></p>
        </div>
        <div id="subtitle" className="div-left--bottom">
          <Subtitle
            styleTitle={"subtitle"}
            text="Generate random facts, from random years"
          />
        </div>
        <button
          id="delete-button"
          className="delete-button"
          onClick={deleteFacts}
        >
          <svg
            width="40"
            height="48"
            viewBox="0 0 50 58"
            fill="none"
            stroke="#333333"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.23445 11.8182H44.7655M5.23445 11.8182H1V4.81818H19.9474M5.23445 11.8182L6.38636 23.1136M44.7655 11.8182H49V4.81818H30.0526M44.7655 11.8182L43.6136 23.1136M42.4617 34.4091H7.53828M42.4617 34.4091L43.6136 23.1136M42.4617 34.4091L41.3098 45.7045M7.53828 34.4091L6.38636 23.1136M7.53828 34.4091L8.69019 45.7045M6.38636 23.1136H43.6136M41.3098 45.7045L40.1579 57H25H9.8421L8.69019 45.7045M41.3098 45.7045H8.69019M30.0526 4.81818V1H19.9474V4.81818M30.0526 4.81818H19.9474"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      <div id="mainRightDiv" className="div div-right">
        <Button text="Generate Random Year Fact" onClick={getFact} />
      </div>
      <Timeline facts={randomFacts} />
    </div>
  );
};

export default Main;
