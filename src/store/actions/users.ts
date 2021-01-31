import { saveQuestionAnswer } from '../../api';
import { addAnswerToQuestion } from './questions';

const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
const RECEIVE_USERS = 'RECEIVE_USERS';

const addAnswerToUser = (authUser, qid, answer) => ({
  type: ADD_ANSWER_TO_USER,
  authUser,
  qid,
  answer,
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

const addQuestionToUser = ({ id, author }) => ({
  type: ADD_QUESTION_TO_USER,
  id,
  author,
});

const handleSaveQuestionAnswer = (authUser, qid, answer) => {
  return dispatch => {
    dispatch(addAnswerToUser(authUser, qid, answer));
    dispatch(addAnswerToQuestion(authUser, qid, answer));

    return saveQuestionAnswer(authUser, qid, answer).catch(e => {
      console.error('Error in handleSaveQuestionAnswer:', e);
    });
  };
};

export {
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER,
  RECEIVE_USERS,
  receiveUsers,
  addAnswerToUser,
  handleSaveQuestionAnswer,
  addQuestionToUser,
};
