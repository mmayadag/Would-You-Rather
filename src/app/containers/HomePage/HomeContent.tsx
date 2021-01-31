import * as React from 'react';
import { Title } from 'app/components/Title';
import { connect } from 'react-redux';
import UserCard from 'app/components/UserCard';
import styled from 'styled-components/macro';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'app/components/Link';

const HomeContent = ({ userQuestionData }: any) => (
  <Tabs>
    <TabList>
      <Tab>UnAnswered</Tab>
      <Tab>Answered</Tab>
    </TabList>

    <StyledTabPanel>
      <Questions userQuestionData={userQuestionData} />
    </StyledTabPanel>
    <StyledTabPanel>
      <Questions isAnswered={true} userQuestionData={userQuestionData} />
    </StyledTabPanel>
  </Tabs>
);

const StyledTabPanel = styled(TabPanel)`
  text-align: center;
`;
const Questions = ({ userQuestionData, isAnswered = false }: any) => {
  const type = isAnswered === true ? 'answered' : 'unanswered';
  return (
    <>
      {userQuestionData[type].length > 0 ? (
        userQuestionData[type].map((question: any) => (
          <UserCard
            key={question.id}
            question_id={question.id}
            unanswered={isAnswered === false}
          />
        ))
      ) : (
        <>
          <Title>No Question left</Title>
          <Link to="/add">Create question</Link>
        </>
      )}
    </>
  );
};

function mapStateToProps({ authUser, users, questions }: any) {
  const answeredIds = Object.keys(users[authUser].answers);
  const unanswered = Object.values(questions)
    .filter((question: any) => !answeredIds.includes(question.id))
    .sort((a: any, b: any) => b.timestamp - a.timestamp);
  const answered = Object.values(questions)
    .filter((question: any) => answeredIds.includes(question.id))
    .sort((a: any, b: any) => b.timestamp - a.timestamp);

  return {
    userQuestionData: {
      answered,
      unanswered,
    },
  };
}

export default connect(mapStateToProps)(HomeContent);
