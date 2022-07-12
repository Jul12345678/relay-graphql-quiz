import React, { useState } from 'react';
import { Difficulty, fetchQuizQuestions } from './API';
import Questions from './components/Questions';

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>Quiz</h1>
      <button onClick={startQuiz}>Start Quiz</button>
      <p>Score</p>
      <p>Loading...</p>
      {/* <Questions
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].questions
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
