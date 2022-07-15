const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLEnumType,
} = require('graphql');

const Difficulty = new GraphQLEnumType({
  name: 'Difficulty',
  values: {
    EASY: { value: 'EASY' },
    MEDIUM: { value: 'MEDIUM' },
    HARD: { value: 'HARD' },
  },
});

const AnswerObject = new GraphQLObjectType({
  name: 'AnswerObject',
  fields: () => ({
    question: { type: GraphQLString },
    answer: { type: GraphQLString },
    correct: { type: GraphQLBoolean },
    correctAnswer: { type: GraphQLString },
  }),
});

const RelayQuestionsDisplay = new GraphQLObjectType({
  name: 'RelayQuestionsDisplay',
  fields: () => ({
    question: {
      type: GraphQLString,
    },
    answers: { type: new GraphQLList(GraphQLString) },
    userAnswer: { type: AnswerObject },
    questionNr: { type: GraphQLInt },
    totalQuestions: { type: GraphQLInt },
    callback: { type: GraphQLString },
  }),
});

const Question = new GraphQLObjectType({
  name: 'Question',
  fields: () => ({
    category: { type: GraphQLString },
    type: { type: GraphQLString },
    difficulty: { type: GraphQLString },
    question: { type: GraphQLString },
    correct_answer: { type: GraphQLString },
    incorrect_answers: { type: new GraphQLList(GraphQLString) },
  }),
});
const QuestionState = new GraphQLObjectType({
  name: 'QuestionState',
  fields: () => ({
    category: { type: GraphQLString },
    type: { type: GraphQLString },
    difficulty: { type: GraphQLString },
    question: { type: GraphQLString },
    correct_answer: { type: GraphQLString },
    incorrect_answers: { type: new GraphQLList(GraphQLString) },
    answers: { type: new GraphQLList(GraphQLString) },
  }),
});

const RelayQuestions = new GraphQLObjectType({
  name: 'RelayQuestions',
  fields: () => ({
    category: { type: GraphQLString },
    type: { type: GraphQLString },
    difficulty: { type: GraphQLString },
    question: { type: GraphQLString },
    correct_answer: { type: GraphQLString },
    incorrect_answers: { type: new GraphQLList(GraphQLString) },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    question: {
      type: new GraphQLList(Question),

      resolve(parent, args) {
        return axios
          .get(`https://opentdb.com/api.php?amount=10&type=boolean`)

          .then((res) => res.data.results);
      },
    },

    relayquestionsdisplay: {
      type: new GraphQLList(RelayQuestionsDisplay),
      resolve(parent, args) {
        return axios
          .get(`https://opentdb.com/api.php?amount=10&type=boolean`)

          .then((res) => res.data.results);
      },
    },

    questionstate: {
      type: new GraphQLList(QuestionState),

      resolve(parent, args) {
        return axios
          .get(`https://opentdb.com/api.php?amount=10&type=boolean`)

          .then((res) => res.data.results);
      },
    },
    answerobject: {
      type: new GraphQLList(AnswerObject),
      args: {
        question: { type: GraphQLString },
        answer: { type: GraphQLString },
        correct: { type: GraphQLBoolean },
        correctAnswer: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get(`https://opentdb.com/api.php?amount=10&type=boolean`)

          .then((res) => res.data.results);
      },
    },

    relayquestions: {
      type: RelayQuestions,
      resolve(parent, args) {
        return axios
          .get(`https://opentdb.com/api.php?amount=10&type=boolean`)

          .then((res) => res.data.results);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
