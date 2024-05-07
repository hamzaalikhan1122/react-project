import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  console.log(userAnswers);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <Question
      key={activeQuestionIndex}
      index={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
      onSkipAnswer={handleSkipAnswer}
    />
  );
}

export default Quiz;
