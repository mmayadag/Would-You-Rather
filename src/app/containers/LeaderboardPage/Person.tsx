import React from 'react';
import styled from 'styled-components/macro';
import {
  QuestionWrapper,
  ContentWrapper,
  User,
  AuthorName,
  BodyWrapper,
} from 'app/components/UserCard';
export const Text = styled.div`
  font-size: 1rem;
  margin: 0;
  color: ${p => p.theme.text};
`;

export const ScoreWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.text};
  border: 1px solid ${p => p.theme.backgroundVariant};
  padding: 1rem;
  margin-top: 1rem;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CenteredAuthorName = styled(AuthorName)`
  text-align: center;
`;
const StyledQuestionWrapper = styled(QuestionWrapper)`
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid ${p => p.theme.background};
  margin-bottom: 1rem;
`;
const StyledBodyWrapper = styled(BodyWrapper)`
  align-items: space-between;
  align-self: center;
`;
const Person = ({ data }: any) => {
  const { answerCount, avatarURL, name, questionCount, total } = data;
  return (
    <StyledQuestionWrapper>
      <ContentWrapper>
        <User>
          <div>
            <img src={avatarURL} alt="avatar" />
            <CenteredAuthorName>{name}</CenteredAuthorName>
          </div>
        </User>
        <StyledBodyWrapper>
          <div>
            <Text>answered question: {answerCount}</Text>
            <Text>created question: {questionCount}</Text>
          </div>
          <ScoreWrapper>
            <div>Score:</div>
            <div>{total}</div>
          </ScoreWrapper>
        </StyledBodyWrapper>
      </ContentWrapper>
    </StyledQuestionWrapper>
  );
};

export { Person };
