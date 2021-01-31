import * as React from 'react';

import { connect } from 'react-redux';
import { Person } from './Person';

export const Leaderboard = ({ leaderboardData }) => {
  return (
    <>
      {leaderboardData.map((personData: any) => (
        <Person key={personData.id} data={personData} />
      ))}
    </>
  );
};

function mapStateToProps({ users }: any) {
  const leaderboardData = Object.values(users)
    .map((user: any) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => a.total - b.total)
    .reverse()
    .slice(0, 3);
  return {
    leaderboardData,
  };
}

export default connect(mapStateToProps)(Leaderboard);
