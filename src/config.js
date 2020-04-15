const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://csback.kskonovalov.me/graphql'
    : 'http://localhost/cs/backend/graphql';

// export default apiUrl;
// exports.default = API_URL;

module.exports = {
  API_URL
};
