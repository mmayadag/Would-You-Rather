import { getInitialData } from '../../api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

const handleInitialData = () => {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
};

export { handleInitialData };
