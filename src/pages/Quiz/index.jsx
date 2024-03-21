import { useEffect, useState } from "react";
import { dataCategory, dataDifficulty } from "../../resources/data";
import "./styles.css";
import { quizApi } from "../../utils/apis/quizApi";

const Quiz = () => {
  const [initialStart, setInitialStart] = useState({
    number: 5,
    category: "",
    difficulty: "",
    time: 10,
  });
  const [currentRound, setCurrentRound] = useState(0);
  const [quizzes, setQuizzes] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [time, setTime] = useState(initialStart.time);
  const [canCheck, setCanCheck] = useState(false);

  useEffect(() => {
    if (time === 0) {
      nextQuestion();
    }
    const timer = setInterval(() => {
      time && setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  const startQuiz = async () => {
    restart();
    try {
      const quizzes = await quizApi.getQuizQuery(initialStart);
      setQuizzes(quizzes);
      setCurrentRound(1);
      setTime(initialStart.time);
    } catch (error) {
      console.log(error);
    }
  };

  const checkAnswer = () => {
    if (quizzes[currentNumber].correctAnswers.includes(answerSelected)) {
      setCurrentScore(currentScore + quizzes[currentNumber].score);
    }
    setTime(null);
    setCanCheck(true);
  };
  const nextQuestion = () => {
    setCurrentNumber(currentNumber + 1);
    setAnswerSelected(null);
    setTime(initialStart.time);
    setCanCheck(false);
    if (currentNumber + 1 === quizzes.length) {
      setCurrentRound(2);
    }
  };
  const restart = () => {
    setQuizzes([]);
    setTime(initialStart.time);
    setCurrentRound(0);
    setAnswerSelected("");
    setCurrentScore(0);
    setCurrentNumber(0);
    setCanCheck(false);
  };

  return (
    <div className="quiz_container">
      <div className="content">
        {currentRound === 0 && (
          <div className="start-screen">
            <h1 className="heading">Quiz Options</h1>
            <div className="settings">
              <label>Number of Questions:</label>
              <select
                onChange={(e) =>
                  setInitialStart((prev) => ({
                    ...prev,
                    number: Number(e.target.value),
                  }))
                }
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              <label>Select Category:</label>
              <select
                onChange={(e) =>
                  setInitialStart((prev) => ({
                    ...prev,
                    category: +e.target.value,
                  }))
                }
              >
                <option value="">any category</option>
                {dataCategory.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.text}
                  </option>
                ))}
              </select>
              <label>Select difficulty:</label>
              <select
                onChange={(e) =>
                  setInitialStart((prev) => ({
                    ...prev,
                    difficulty: e.target.value,
                  }))
                }
              >
                <option value="">any difficulty</option>
                {dataDifficulty.map((difficulty) => (
                  <option key={difficulty.value} value={difficulty.value}>
                    {difficulty.text}
                  </option>
                ))}
              </select>
              <label>Select time per question:</label>
              <select
                onChange={(e) =>
                  setInitialStart((prev) => ({
                    ...prev,
                    time: e.target.value,
                  }))
                }
              >
                <option value="10">10 seconds</option>
                <option value="15">15 seconds</option>
                <option value="20">20 seconds</option>
                <option value="25">25 seconds</option>
                <option value="30">30 seconds</option>
                <option value="60">60 seconds</option>
              </select>
            </div>
            <button className="btn" onClick={startQuiz}>
              Start Quiz
            </button>
          </div>
        )}

        {currentRound === 1 && (
          <div className="quiz ">
            <div className="timer">
              <div className="progress">
                <div className="progress-bar"></div>
                <span className="progress-text">{time}</span>
              </div>
            </div>
            <div className="question-wrapper">
              <div className="number">
                Question <span className="current">{currentNumber + 1}</span>
                <span className="total">/{quizzes?.length}</span>
              </div>
              <div className="question">{quizzes[currentNumber]?.question}</div>
            </div>
            <div className="answer-wrapper">
              {quizzes[currentNumber]?.answers.map((answer) => (
                <div
                  key={answer}
                  className={`answer ${
                    canCheck &&
                    answerSelected &&
                    quizzes[currentNumber].correctAnswers.includes(answer) &&
                    "correct"
                  } ${
                    canCheck &&
                    answerSelected === answer &&
                    !quizzes[currentNumber].correctAnswers.includes(
                      answerSelected
                    ) &&
                    "wrong"
                  } ${answer === answerSelected && "selected"}`}
                  onClick={() => setAnswerSelected(answer)}
                >
                  <span className="text">{answer}</span>
                  <span className="checkbox">
                    <i className="fas fa-check"></i>
                  </span>
                </div>
              ))}
            </div>
            {!canCheck ? (
              <button
                className="btn"
                disabled={!answerSelected}
                onClick={checkAnswer}
              >
                Submit
              </button>
            ) : (
              <button className="btn" onClick={nextQuestion}>
                Next
              </button>
            )}
            <button className="btn restart new" onClick={restart}>
              Start New Quiz
            </button>
          </div>
        )}

        {currentRound === 2 && (
          <div className="end-screen">
            <h1 className="heading">Quiz End</h1>
            <div className="user-rank">
              <span className="rank-text">Your Rank:</span>
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {currentScore}
              </h1>
              <div className="rank-item">
                <span className="final-rank">1st</span>
                <span className="name">Long Tran</span>
                <span className="core">2790</span>
              </div>
              <div className="rank-item">
                <span className="final-rank">2st</span>
                <span className="name">Quan Tran</span>
                <span className="core">1490</span>
              </div>
              <div className="rank-item">
                <span className="final-rank">3st</span>
                <span className="name">No door</span>
                <span className="core">990</span>
              </div>
            </div>
            <div className="score">
              <span className="score-text">Your score:</span>
              <div>
                <span className="final-score">0</span>
                <span className="total-score">/10</span>
              </div>
            </div>
            <button className="btn restart" onClick={restart}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
