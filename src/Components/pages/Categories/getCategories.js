const getCategories = `categories(where: { hideEmpty: true }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }`;

exports.default = getCategories;
