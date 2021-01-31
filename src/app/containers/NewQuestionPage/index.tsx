import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import NewQuestionForm from './NewQuestionForm';
import { PageWrapper } from 'app/components/PageWrapper';

export function NewQuestionPage() {
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
        <NewQuestionForm />
      </PageWrapper>
    </>
  );
}
