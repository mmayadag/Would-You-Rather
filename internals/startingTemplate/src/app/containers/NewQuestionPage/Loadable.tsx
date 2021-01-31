/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const NewQuestionPage = lazyLoad(
  () => import('./index'),
  module => module.NewQuestionPage,
);
