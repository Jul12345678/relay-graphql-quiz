import { Question } from './types/types';
import { shuffleArray } from './utils';

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number) => {
  // Change url type=multiple for multiple choice / type=boolean for true/false
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&type=boolean`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
