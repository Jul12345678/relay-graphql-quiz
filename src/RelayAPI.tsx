import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { RelayAPI_relayquestions$data } from './__generated__/RelayAPI_relayquestions.graphql';
import RelayQuestions from './RelayQuestionsDisplay';
import { shuffleArray } from './utils';

export type QuestionState = typeof RelayQuestions & { answers: string[] };

export const fetchQuizQuestions = async (amount: number) => {
  // Change url type=multiple for multiple choice / type=boolean for true/false
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&type=boolean`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((relayquestions: RelayAPI_relayquestions$data) => ({
    ...relayquestions,
    answers: shuffleArray([
      relayquestions.incorrect_answers,
      relayquestions.correct_answer,
    ]),
  }));
};

export default createFragmentContainer(RelayQuestions, {
  relayquestions: graphql`
    fragment RelayAPI_relayquestions on RelayQuestions {
      category
      type
      difficulty
      question
      correct_answer
      incorrect_answers
    }
  `,
});
