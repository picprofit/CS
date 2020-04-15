const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const fetch = require('isomorphic-unfetch');


// const getPosts = require('./src/Components/pages/Posts/getPosts');
const query = ` 
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
    
`;

module.exports = withCSS(withSASS({
  exportTrailingSlash: true,
  exportPathMap: async () => {
    const paths = {
      '/': { page: '/' },
      '/search': { page: '/search' }
    };

    const res = await fetch('http://localhost/cs/backend/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
       ${query}
    }`,
      }),
    });
    const data = await res.json();
    const { posts } = data.data;

    posts.edges.map(item => {
      const { id, slug } = item.node;
      paths[`/posts/${slug}`] = { page: '/posts/[id]', query: { id } };
      return item;
    });

    return paths;
  }
}));
