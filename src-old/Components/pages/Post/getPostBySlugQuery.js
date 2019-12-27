import gql from 'graphql-tag';

const getPostBySlugQuery = gql`
    query GetPostBySlug($slug: String) {
        post: postBy(uri: $slug) {
            id
            content
            title
        }
    }
`;

export default getPostBySlugQuery;