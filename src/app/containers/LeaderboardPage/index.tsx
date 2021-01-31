import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import Content from './Content';
import { PageWrapper } from 'app/components/PageWrapper';

export function LeaderboardPage() {
  return (
    <>
      <Helmet>
        <title>Leader Board</title>
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Content />
      </PageWrapper>
    </>
  );
}
