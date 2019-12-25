import expect from 'expect';

import fixSpecialCharacters from './fixSpecialCharacters';

describe('fixSpecialCharacters:', () => {
  it('Should replace < and > to &lt; and &rt; respectively', () => {
    const string = '<script>';
    const resultString = '&lt;script&gt;';
    expect(resultString).toEqual(fixSpecialCharacters(string));
  });
});
