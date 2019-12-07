const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://csback.kskonovalov.me/graphql'
    : 'http://localhost/cs/backend/graphql';
export { apiUrl };