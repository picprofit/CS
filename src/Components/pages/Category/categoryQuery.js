import gql from 'graphql-tag';

const getAllCategoriesQuery = `
  categories {
    edges {
      node {
        id
        name
        slug
      }
    }
  }
`;

const categoryQuery = gql`
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
        ${getAllCategoriesQuery}
    }
`;

export default categoryQuery;