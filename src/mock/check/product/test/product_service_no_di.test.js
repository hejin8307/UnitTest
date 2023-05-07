// ProductService 코드를 테스트
// 단위 테스트는 서로 모듈간의 상효작용을 테스트하면 안 된다.
// 그래서 ProductService에서 의존하는 클래스들을 사용하지 않도록 mock을 사용
// 하지만 이 코드는 mock을 너무 남용한 코드라고 할 수 있음

const ProductClient = require('../product_client');
const ProductService = require('../product_service_no_di');
jest.mock('../product_client');

describe('ProductService', () => {
  let productService;

  // 네트워크 상태에 구애받지 않고 productService 테스트 가능
  const fetchItems = jest.fn(async () => [
    {item: '🥛', available: true},
    {item: '🍌', available: false},
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{item: '🥛', available: true}]);
  });

  it('test', async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
