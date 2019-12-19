/**
 * Method replaces all special characters to display them,
 * except of tags
 *
 * @param str
 * @returns {*}
 */
const fixSpecialCharacters = str => {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

export default fixSpecialCharacters;
