/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

// Pages
import { HomePage } from './containers/HomePage/Loadable';
import { NewQuestionPage } from './containers/NewQuestionPage/Loadable';
import { LeaderboardPage } from './containers/LeaderboardPage/Loadable';
import { LoginPage } from './containers/LoginPage/Loadable';
import { UserQuestionPage } from './containers/UserQuestionPage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';

import { useTranslation } from 'react-i18next';
import { handleInitialData } from 'store/actions/shared';
import { connect } from 'react-redux';
import Footer from './components/Footer';

function App({ authUser, handleInitialData }: any) {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    handleInitialData();
  }, []);

  //const state = useSelector(state => state);
  console.log({ authUser });
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React typescript"
        defaultTitle="Would you rather"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Would you rather" />
      </Helmet>
      {authUser === null ? (
        <Route render={() => <LoginPage />} />
      ) : (
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={HomePage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/add'}
            component={NewQuestionPage}
          />
          <Route path="/leaderboard" component={LeaderboardPage} />
          <Route path="/questions/:question_id" component={UserQuestionPage} />
          <Route path="/questions/bad_id" component={NotFoundPage} />

          <Route component={NotFoundPage} />
        </Switch>
      )}
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}
export default connect(mapStateToProps, { handleInitialData })(App);
