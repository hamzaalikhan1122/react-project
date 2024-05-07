import quimCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.floor(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.floor(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const incorrectAnswersShare = Math.floor(
    100 - skippedAnswersShare - correctAnswersShare
  );
  return (
    <div id="summary">
      <img src={quimCompleteImg} alt="Quiz completed" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else if (answer !== QUESTIONS[index].answers[0]) {
            cssClass += " wrong";
          } else if (answer === null) {
            cssClass += " skipped";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
