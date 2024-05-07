import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions.js";

function Question({ index, onSkipAnswer, onSelectAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={timer}
          timeout={timer}
          onTimeOut={answer.selectedAnswer === "" ? onSkipAnswer : null}
          mode={answerState}
        />
        <h2>{QUESTIONS[index].text}</h2>
        <Answers
          answers={QUESTIONS[index].answers}
          selectedAnswers={answer.selectedAnswer}
          answerState={answerState}
          onSelectAnswer={handleSelectAnswer}
        />
      </div>
    </div>
  );
}

export default Question;
