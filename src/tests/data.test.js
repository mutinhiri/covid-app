import dataReducer, { getAllData } from '../redux/data';

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve([1, 2, 3]),
  });
});

describe('dataReducer', () => {
  test('New state is returned after action is dispatched', () => {
    const state = [];
    const newState = dataReducer(state, getAllData([1, 2, 3]));
    expect(newState).toHaveLength(3);
  });
});
