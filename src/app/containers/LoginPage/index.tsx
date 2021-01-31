import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';

import ConnectedLoginForm from './ConnectedLoginForm';

function LoginPage() {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define

  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <PageWrapper>
        <ConnectedLoginForm />
      </PageWrapper>
    </>
  );
}

export { LoginPage };
