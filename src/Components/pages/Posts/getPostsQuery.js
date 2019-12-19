import gql from 'graphql-tag';

const getPostsQuery = gql`
    query GetPosts {
        posts(first: 999, where: {orderby: {field: DATE, order: DESC}}) {
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

export default getPostsQuery;