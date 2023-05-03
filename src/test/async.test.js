// 비동기 다루는 법
const fetchProduct = require('../async.js');

describe('Async', () => {
  it('async-done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({item: 'Mike', price: 200});
      done();
    });
  });

  // return 하는 방식이 좀 더 빠르게 수행됨
  it('async-return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({item: 'Mike', price: 200});
    });
  });

  it('async-await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({item: 'Mike', price: 200});
  });

  it('async-resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({item: 'Mike', price: 200});
  });
  it('async-reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
