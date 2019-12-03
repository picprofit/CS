import gql from 'graphql-tag';

const getPosts = gql`
    query GetPosts {
        posts(first: 999, where: {orderby: {field: DATE, order: ASC}}) {
            edges {
                node {
                    id
                    title
                    slug
                }
            }
            pageInfo {
                endCursor
                startCursor
                hasNextPage
                hasPreviousPage
            }
        }
    }
`;

export default getPosts;