const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const fetch = require('isomorphic-unfetch');

const config = require('./src/config');

const { API_URL } = config;

const query = require('./src/Components/pages/Posts/getPosts').default;
// const query = `posts(first: 999, where: {orderby: {field: DATE, order: DESC}}) {
//             edges {
//                 node {
//                     id
//                     title
//                     slug
//                 }
//             }
//             pageInfo {
//                 endCursor
//                 startCursor
//                 hasNextPage
//                 hasPreviousPage
//             }
//         }`;

module.exports = withCSS(withSASS({
  exportTrailingSlash: true,
  exportPathMap: async () => {
    const paths = {
      '/': { page: '/' },
      '/search': { page: '/search' }
    };

    const res = await fetch(API_URL, {
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
