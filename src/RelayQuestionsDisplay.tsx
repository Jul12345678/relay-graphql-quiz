import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { AnswerObject } from './App';

type RelayQuestionsDisplay = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

export type Callback = (e: React.MouseEvent<HTMLButtonElement>) => void;

const RelayQuestions: React.FC<RelayQuestionsDisplay> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p>
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default createFragmentContainer(RelayQuestions, {
  relayquestionsdisplay: graphql`
    fragment RelayQuestionsDisplay_relayquestionsdisplay on RelayQuestionsDisplay {
      question
      answers
      questionNr
      totalQuestions
    }
  `,
});
