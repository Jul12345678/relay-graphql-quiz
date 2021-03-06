import React, { useState } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { fetchQuizQuestions, QuestionState } from './API';
import Questions from './components/QuestionsDisplay';
import Callback from './RelayQuestionsDisplay';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
type Setcallback = {
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const TOTAL_QUESTIONS = 10;

function RelayApp() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(TOTAL_QUESTIONS);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  return (
    <div className="App">
      <h1>Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={startQuiz}>Start Quiz</button>
      ) : null}
      {!gameOver ? <p>Score {score}</p> : null}
      {loading && <p>Loading...</p>}
      {!loading && !gameOver && (
        <Questions
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
        // Has to asnwer before next question
      )}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button onClick={nextQuestion}>Next</button>
      ) : null}
    </div>
  );
}

export default createFragmentContainer(RelayApp, {
  answerobject: graphql`
    fragment RelayApp_answerobject on AnswerObject {
      allAnswerObjects(last: 10, orderBy: createdAt_DESC) @connection(key: "RelayApp_answerobject") {
      edges {
        node {
          ...RelayApp_answerobject
      }
    }
  `,
});
