import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from 'store/actions/users';
import { Button } from '../Button';

export const PollQuestion = ({
  authUser,
  handleSaveQuestionAnswer,
  question,
}: any) => {
  const [value, setValue] = useState('');
  const handleChange = (e: any) => setValue(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (value !== '') {
      handleSaveQuestionAnswer(authUser, question.id, value);
    }
  };

  return (
    <>
      <h4>Would you rather</h4>
      <div>
        <label>
          {question.optionOne.text}
          <input
            type="radio"
            name="radioGroup"
            value="optionOne"
            checked={value === 'optionOne'}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {question.optionTwo.text}
          <input
            type="radio"
            name="radioGroup"
            value="optionTwo"
            checked={value === 'optionTwo'}
            onChange={handleChange}
          />
        </label>
      </div>
      <Button disabled={value === '' ? true : false} onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps, { handleSaveQuestionAnswer })(
  PollQuestion,
);
