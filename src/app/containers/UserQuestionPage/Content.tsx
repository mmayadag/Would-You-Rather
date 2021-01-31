import * as React from 'react';
import { Title } from 'app/components/Title';
import { Wrapper } from 'app/components/Wrapper';
import UserCard from 'app/components/UserCard';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const Content = ({ answeredIds }: any) => {
  let { question_id }: { question_id: string } = useParams();
  const unanswered = answeredIds.indexOf(question_id) !== -1 ? true : false;
  return (
    <Wrapper>
      <Title>User Question Page</Title>
      <UserCard question_id={question_id} unanswered={unanswered} type="page" />
    </Wrapper>
  );
};

const mapStateToProps = ({ authUser, users }: any) => ({
  answeredIds: Object.keys(users[authUser].answers),
});

export default connect(mapStateToProps)(Content);
