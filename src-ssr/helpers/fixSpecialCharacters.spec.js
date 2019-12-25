import expect from 'expect';

import fixSpecialCharacters from './fixSpecialCharacters';

describe('fixSpecialCharacters:', () => {
  it('Should replace < and > to &lt; and &rt; respectively', () => {
    const string = '<script>';
    const resultString = '&lt;script&gt;';
    expect(fixSpecialCharacters(string)).toEqual(resultString);
  });
  it('Should replace few <<< to &lt;&lt;&lt;', () => {
    const string = '<<<script>';
    const resultString = '&lt;&lt;&lt;script&gt;';
    expect(fixSpecialCharacters(string)).toEqual(resultString);
  });
  it('Should replace few >>> to &gt;&gt;&gt;', () => {
    const string = '<script>>>';
    const resultString = '&lt;script&gt;&gt;&gt;';
    expect(fixSpecialCharacters(string)).toEqual(resultString);
  });
  it('Should not change other spec symbols like " \' & $', () => {
    const string = '" \' & $';
    const resultString = '" \' & $';
    expect(fixSpecialCharacters(string)).toEqual(resultString);
  });
});
