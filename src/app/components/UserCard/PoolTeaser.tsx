import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from '../Button';

export const PollTeaser = ({ question, unanswered }: any) => {
  const [viewPoll, setViewPoll] = useState(false);

  const handleClick = (e: any) => {
    setViewPoll(!viewPoll);
  };

  //const buttonColor = unanswered === true ? 'green' : 'blue';

  return (
    <>
      {viewPoll === true ? (
        <Redirect push to={`/questions/${question.id}`} />
      ) : (
        <>
          <h5>Would you rather</h5>
          <p style={{ textAlign: 'center' }}>
            {question.optionOne.text}
            <br />
            or...
          </p>
          <Button onClick={handleClick}>
            {unanswered === true ? 'Answer Poll' : 'Results'}
          </Button>
        </>
      )}
    </>
  );
};

export default PollTeaser;
