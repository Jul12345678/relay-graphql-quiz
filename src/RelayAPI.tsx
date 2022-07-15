import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { RelayQuestions_relayquestions$data } from './__generated__/RelayQuestions_relayquestions.graphql';
import RelayQuestions from './RelayQuestionsDisplay';
import { shuffleArray } from './utils';

export type QuestionState = typeof RelayQuestions & { answers: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
) => {
  // Change url type=multiple for multiple choice / type=boolean for true/false
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: RelayQuestions_relayquestions$data) => ({
    ...question,
    answers: shuffleArray([
      ...this.props.question.incorrect_answers,
      question.correct_answer,
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
