import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import HomeContent from './HomeContent';
import { PageWrapper } from 'app/components/PageWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <HomeContent />
      </PageWrapper>
    </>
  );
}
