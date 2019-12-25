import expect from 'expect';

import { SET_FILTER } from '../constants';
import FilterReducer from './FilterReducer';

describe('FilterReducer test', () => {
  it('Should update filter', () => {
    const state = 'Old string';
    const newFilter = 'Some Search String';
    const expectedState = 'Some Search String';
    expect(
      FilterReducer(state, {
        type: SET_FILTER,
        filter: newFilter
      })
    ).toEqual(expectedState);
  });
});
