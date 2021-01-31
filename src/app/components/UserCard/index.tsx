import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import PollQuestion from './PoolQuestion';
import PollResult from './PoolResult';
import PollTeaser from './PoolTeaser';

const pollTypes = {
  POLL_TEASER: 'POLL_TEASER',
  POLL_QUESTION: 'POLL_QUESTION',
  POLL_RESULT: 'POLL_RESULT',
};

const PollContent = ({ pollType, question, unanswered }: any) => {
  console.log({ b: unanswered, pollType });

  switch (pollType) {
    case pollTypes.POLL_TEASER:
      return <PollTeaser question={question} unanswered={unanswered} />;
    case pollTypes.POLL_QUESTION:
      return <PollQuestion question={question} />;
    case pollTypes.POLL_RESULT:
      return <PollResult question={question} />;
    default:
      return <></>;
  }
};

type UserCardProps = {
  question: any;
  author: any;
  pollType: any;
  unanswered?: boolean;
  question_id?: string;
  badPath?: boolean;
};
export const UserCard = ({
  question,
  author,
  pollType,
  unanswered,
  question_id,
  badPath,
}: UserCardProps) => {
  console.log({
    question,
    author,
    pollType,
    unanswered,
    question_id,
    badPath,
  });
  console.log({ a: unanswered });
  // const tabColor = unanswered === true ? 'green' : 'blue';
  return (
    <>
      {badPath === true ? (
        <Redirect to="/questions/bad_id" />
      ) : (
        <QuestionWrapper>
          <AuthorName>{author.name} asks:</AuthorName>
          <ContentWrapper>
            <User>
              <img src={author.avatarURL} alt="avatar" />
            </User>
            <BodyWrapper>
              <PollContent
                pollType={pollType}
                question={question}
                unanswered={unanswered}
              />
            </BodyWrapper>
          </ContentWrapper>
        </QuestionWrapper>
      )}
    </>
  );
};

export const AuthorName = styled.h5`
  margin: 0.3rem 1rem;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${p => p.theme.border};
  padding: 1rem;
  img {
    max-height: 150px;
  }
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid ${p => p.theme.border};
  padding: 1rem;
  background-color: ${p => p.theme.background};
`;

export const QuestionWrapper = styled.section`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  max-width: 960px;
  border: 1px solid ${p => p.theme.border};
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.backgroundVariant};
  border-radius: 0.28571429rem 0.28571429rem;
  width: 600px;
`;

function mapStateToProps(
  { users, questions, authUser },
  { question_id, type }: { question_id?: string; type?: string },
) {
  let question,
    author,
    pollType,
    badPath = false;

  if (type === 'page') {
    if (question_id !== undefined) {
      console.log({ question_id, type });
      question = questions[question_id];
      const user = users[authUser];

      if (question === undefined) {
        badPath = true;
      } else {
        author = users[question.author];
        pollType = Object.keys(user.answers).includes(question.id)
          ? pollTypes.POLL_RESULT
          : pollTypes.POLL_QUESTION;
      }
    }
  } else {
    if (question_id !== undefined) {
      question = questions[question_id];
      author = users[question.author];
      pollType = pollTypes.POLL_TEASER;
    } else {
      //const { question_id } = match.params;
      //console.log({ params: question_id });
      /*
      question = questions[question_id];
      const user = users[authUser];

      if (question === undefined) {
        badPath = true;
      } else {
        author = users[question.author];
        pollType = Object.keys(user.answers).includes(question.id)
          ? pollTypes.POLL_RESULT
          : pollTypes.POLL_QUESTION;

        console.log({ pollType });
      }
      */
      console.log('pollType');
    }
  }

  return {
    badPath,
    question,
    author,
    pollType,
  };
}

export default connect(mapStateToProps)(UserCard);
