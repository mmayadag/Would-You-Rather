import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function NewQuestionPage() {
  return (
    <>
      <Helmet>
        <title>NewQuestion Page</title>
        <meta name="description" content="NewQuestion Page" />
      </Helmet>
      <span>NewQuestion container</span>
    </>
  );
}
