import gql from 'graphql-tag';

const getCategories = gql`
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

export default getCategories;