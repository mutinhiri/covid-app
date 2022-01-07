
global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve([1, 2, 3]),
  });
});

describe('covidReducer', () => {
  test('Reducer returns a new state after action dispatch', () => {
     let item_1 = {},
      item_2 = {},
      item_3 = {}
  });
});
