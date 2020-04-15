const getPosts = `posts(first: 999, where: {orderby: {field: DATE, order: DESC}}) {
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
        }`;

exports.default = getPosts;
