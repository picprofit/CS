import expect from 'expect';

import { SET_SEARCH } from '../constants';
import SearchReducer from './SearchReducer';

describe('SearchReducer test', () => {
  it('SearchReducer should replace search string', () => {
    const searchString = 'Old search string';
    const newSearchString = 'New search string';
    const expectedState = 'New search string';
    expect(
      SearchReducer(searchString, {
        type: SET_SEARCH,
        search: newSearchString
      })
    ).toEqual(expectedState);
  });
});
