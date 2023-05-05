import { formatJobTitle, formatQueryParams } from ".";

describe('The formatJobTitle function', () => {
  it('should add a comma to an item', () => {
    expect(formatJobTitle('item2', 3, 1)).toEqual('item2,')
  });
  it('should not add a comma to the last item', () => {
    expect(formatJobTitle('item3', 3, 2)).toEqual('item3')
  });
})

describe('The function formatQueryParams', () => {
  it('should not add an & separator before the first answer', () => {
    expect(formatQueryParams({ "1": "yes" })).toEqual("a1=yes");
  })
  it('should return & seprator after the first answer', () => {
    expect(formatQueryParams({ '1': "yes", "2": "no", "3": "maybe" })).toEqual("a1=yes&a2=no&a3=maybe")
  });
})