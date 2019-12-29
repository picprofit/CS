import expect from 'expect';

import { SET_TITLE } from '../constants';
import TitleReducer from './TitleReducer';

describe('TitleReducer test', () => {
  it('TitleReducer should change title', () => {
    const oldTitle = 'Hello';
    const newTitle = 'HelloWorld';
    const expectedTitle = 'HelloWorld';
    expect(
      TitleReducer(oldTitle, {
        type: SET_TITLE,
        title: newTitle
      })
    ).toEqual(expectedTitle);
  });
});
