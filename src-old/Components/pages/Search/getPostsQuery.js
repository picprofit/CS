import gql from 'graphql-tag';

const getPostsQuery = gql`
    query getPostsQuery($search: String) {
        posts(first: 999, where: {search: $search, orderby: {field: DATE, order: ASC}}) {
            edges {
                node {
                    id
                    title
                    slug
                }
            }
        }
    }
`;
export default getPostsQuery;