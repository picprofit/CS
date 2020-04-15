const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const fetch = require('isomorphic-unfetch');

const config = require('./src/config');

const { API_URL } = config;

const postsQuery = require('./src/Components/pages/Posts/getPosts').default;
const categoriesQuery = require('./src/Components/pages/Categories/getCategories').default;

const getPaths = async (query, type) => {
  const paths = {};
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
  const result = data.data[type];

  result.edges.map(item => {
    const { id, slug } = item.node;
    paths[`/${type}/${slug}`] = { page: `/${type}/[id]`, query: { id } };
    return item;
  });
  return paths;
};

module.exports = withCSS(withSASS({
  exportTrailingSlash: true,
  exportPathMap: async () => {
    const paths = {
      '/': { page: '/' },
      '/search': { page: '/search' }
    };

    /* get pages */
    Object.assign(paths, await getPaths(postsQuery, 'posts'));
    /* get categories */
    Object.assign(paths, await getPaths(categoriesQuery, 'categories'));

    return paths;
  }
}));
