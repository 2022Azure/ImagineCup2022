import React, { useState } from "react";

import testCardsOriginal from "../data/testCardsCB";
import TestCard from "../components/TestCard";

import OutlinedInput from "@material-ui/core/OutlinedInput";


const TestCB = () => {
  const [randomIndexCB, setRandomIndexCB] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [testCards, setTestCards] = useState([...testCardsOriginal]);

  const styles = {
    input: {
      height: 40,
      width: 200,
      margin: 10
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && answer !== "") {
      checkAnswer();
    }
  }

  const unSureAnswer = () => {
    setScore(score + 0);
    nextTestCard();
    setAnswer("");
  }

  const checkAnswer = () => {
    if (answer !== "" && answer === testCards[randomIndexCB].answer) {
      setScore(score + 1);
    } else {
      setScore(score + 0);
    }
    nextTestCard();
    setAnswer("");
  }

  const nextTestCard = () => {
    let currentCardArray = testCards;
    if (currentCardArray.length > 1) {
      currentCardArray.splice(randomIndexCB, 1);
      setTestCards(currentCardArray);
      setRandomIndexCB(Math.floor(Math.random() * testCards.length));
      console.log(testCards);
    } else {
      setShowScore(true);
      setTestCards([...testCardsOriginal]);
    }
  }

  const resetTest = () => {
    setScore(0);
    setShowScore(false);
  }
  return (
    <div className="main">
      <div className="content-section">
        <div className="content-wrapper">
          <div className="section-header">Color Blind Test</div>

          {showScore === false ? (
            <div className="test-content">
              <div className="section-description">
                Look at the number inside the picture and enter the correct
                answer in the box below.
               
              </div>
             
              <TestCard
              
                imgSrc={testCards[randomIndexCB].imgSrc}
                alt={testCards[randomIndexCB].alt}
              />
               <p> {16 - testCards.length} / 15</p>
              <div className="input-container flex">
              
                <OutlinedInput
                  style={styles.input}
                  type="number"
                  placeholder="Enter your answer here"
                  value={answer}
                  onKeyPress={(e) => {
                    handleKeyDown(e);
                  }}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
                                <div
                  className="button"
                  onClick={() => {
                    unSureAnswer();
                  }}
                >
                  Not Sure
                </div>
                <div
                  className="button"
                  onClick={() => {
                    checkAnswer();
                  }}
                >
                  Submit
                </div>
               
              </div>
            </div>
          ) : (
            <div className="score-container">
              <div className="score">Your score is {score}/{testCards.length}.</div>
              <div
                className="button"
                onClick={() => {
                  resetTest();
                }}
              >
                Close
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestCB;
