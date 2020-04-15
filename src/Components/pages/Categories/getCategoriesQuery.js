import gql from 'graphql-tag';

import getCategories from './getCategories';

const getCategoriesQuery = gql`
  query GetCategories {${getCategories.default}}
`;

export default getCategoriesQuery;
