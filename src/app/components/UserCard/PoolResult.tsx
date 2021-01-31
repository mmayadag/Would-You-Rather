import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '../Button';
import styled from 'styled-components/macro';

const YourVoteLabel = () => (
  <StyledYourVoteLabel>
    Your
    <br />
    Vote
  </StyledYourVoteLabel>
);

const StyledYourVoteLabel = styled.div`
  color: white;
  background: rgba(255, 166, 0, 0.5);
  padding: 1rem;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1rem;
`;

export const PollResult = (props: any) => {
  const { question, user } = props;
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const votesTotal = optionOneVotes + optionTwoVotes;
  const userVote = user.answers[question.id];

  //TODO: check votes

  return (
    <>
      <h3>Results:</h3>
      <strong>Would you rather</strong>
      <div
        style={{
          position: 'relative',
          border: userVote === 'optionOne' ? '1px solid orange' : 'inherit',
        }}
      >
        {userVote === 'optionOne' && <YourVoteLabel />}
        <p style={{ fontWeight: 'bold' }}>{question.optionOne.text}</p>
        <p>
          {optionOneVotes} out of {votesTotal} votes,
          <br />%{((optionOneVotes / votesTotal) * 100).toFixed(2)}
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          border: userVote === 'optionTwo' ? '1px solid orange' : 'inherit',
        }}
      >
        {userVote === 'optionTwo' && <YourVoteLabel />}
        <p style={{ fontWeight: 'bold' }}>{question.optionTwo.text}</p>
        <p>
          {optionTwoVotes} out of {votesTotal} votes,
          <br />%{((optionTwoVotes / votesTotal) * 100).toFixed(2)}
        </p>
      </div>
      <Button onClick={handleClick}>Back</Button>
    </>
  );
};

function mapStateToProps({ users, authUser }) {
  const user = users[authUser];
  return {
    user,
  };
}
export default connect(mapStateToProps)(PollResult);
