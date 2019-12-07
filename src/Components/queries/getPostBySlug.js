import gql from 'graphql-tag';

const getPostBySlug = gql`
    query GetPostBySlug($slug: String) {
        post: postBy(uri: $slug) {
            id
            content
            title
        }
    }
`;

export default getPostBySlug;