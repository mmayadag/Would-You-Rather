import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    }),
  );
};

const saveQuestionAnswer = (authUser, qid, answer) => {
  return _saveQuestionAnswer({ authUser, qid, answer });
};

const saveQuestion = question => {
  return _saveQuestion(question);
};

export { getInitialData, saveQuestionAnswer, saveQuestion };
