import gql from 'graphql-tag';

const getPostsByCategoryQuery = gql`
    query getPostsByCategoryQuery($slug: String) {
        posts(
            where: { categoryName: $slug, orderby: { field: DATE, order: ASC } }
            first: 999
        ) {
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

export default getPostsByCategoryQuery;