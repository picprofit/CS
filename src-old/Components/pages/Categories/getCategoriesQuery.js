import gql from 'graphql-tag';

const getCategoriesQuery = gql`
    query GetCategories {
        categories(where: {hideEmpty: true}) {
            edges {
                node {
                    id
                    name
                    slug
                }
            }
        }
    }
`;

export default getCategoriesQuery;