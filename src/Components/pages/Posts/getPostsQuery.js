import gql from 'graphql-tag';

import getPosts from './getPosts';

const getPostsQuery = gql`
    query GetPosts {${getPosts.default}}
`;

export default getPostsQuery;
