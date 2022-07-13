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
  name: 'Answer',
  fields: () => ({
    question: { type: GraphQLString },
    answer: { type: GraphQLString },
    correct: { type: GraphQLBoolean },
    correctAnswer: { type: GraphQLString },
  }),
});

const Props = new GraphQLObjectType({
  name: 'Props',
  fields: () => ({
    question: {
      type: GraphQLString,
    },
    answer: { type: GraphQLString },
    userAnswer: { type: AnswerObject } | undefined,
    questionNr: { type: GraphQLInt },
    totalQuestions: { type: GraphQLInt },
  }),
});

const Question = new GraphQLObjectType({
  name: 'Question',
  fields: () => ({
    category: { type: GraphQLString },
    type: { type: GraphQLBoolean },
    difficulty: { type: GraphQLString },
    question: { type: GraphQLString },
    correctAnswer: { type: GraphQLBoolean },
    incorrectAnswers: { type: GraphQLBoolean },
    amount: { type: GraphQLInt },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    question: {
      type: new GraphQLList(Question),
      args: {
        category: { type: GraphQLString },
        type: { type: GraphQLString },
        difficulty: { type: GraphQLString },
      },
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
