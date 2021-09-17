export const randomFacts = [];
export let length = 0;

//CALL GENERATED FACTS
export const callGeneratedFacts = ({ index }) => {
  console.log(randomFacts[index]);
};

//CHANGE STYLE OF DIVS
export const changLeftDiv = () => {
  document.getElementById("mainLeftDiv").className = "div div-left--facts";
  document.getElementById("close-button").style.visibility = "visible";
  document.getElementById("delete-button").style.visibility = "visible";
  document.getElementById("subtitle").style.visibility = "hidden";
  document.getElementById("mainRightDiv").style.backgroundColor = "lightblue";
};

export const resetDiv = () => {
  document.getElementById("mainLeftDiv").className = "div div-left--background";
  document.getElementById("close-button").style.visibility = "hidden";
  document.getElementById("delete-button").style.visibility = "hidden";
  document.getElementById("subtitle").style.visibility = "visible";
  document.getElementById("yearTitle").innerText = null;
  document.getElementById("randomFactText").innerText = null;
  let rightDiv = document.getElementById("mainRightDiv");
  rightDiv.style.backgroundColor = "white";
};
//-------------------------------------------------------------------------------

//GENERATE RANDOM FACTS
export const generateRandomFact = async () => {
  if (length < 6) {
    return await fetch("http://numbersapi.com/random/year?json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.getElementById("yearTitle").innerText = data.number;
        document.getElementById("randomFactText").innerText = data.text;
        changLeftDiv();
        randomFacts.push(data);
        length += 1;
        return data;
      })
      .catch((err) => {
        console.log("rejected", err);
      });
  }
};

//CLOSE RANDOM FACTS
export const closeRandomFact = () => {
  resetDiv();
};

//ELIMINATE RANDOM FACTS
export const eliminateRandomFact = () => {
  length = 0;
  resetDiv();
};
//-------------------------------------------------------------------------------
