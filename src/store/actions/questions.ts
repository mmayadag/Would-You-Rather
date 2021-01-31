import { saveQuestion } from '../../api';
import { addQuestionToUser } from '../actions/users';

const ADD_QUESTION = 'ADD_QUESTION';
const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

const addQuestion = question => ({
  type: ADD_QUESTION,
  question,
});

const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

const addAnswerToQuestion = (authUser, qid, answer) => ({
  type: ADD_ANSWER_TO_QUESTION,
  authUser,
  qid,
  answer,
});

const handleSaveQuestion = (optionOneText, optionTwoText, author) => {
  return dispatch => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      },
    );
  };
};

export {
  RECEIVE_QUESTIONS,
  ADD_ANSWER_TO_QUESTION,
  ADD_QUESTION,
  receiveQuestions,
  addAnswerToQuestion,
  addQuestion,
  handleSaveQuestion,
};
