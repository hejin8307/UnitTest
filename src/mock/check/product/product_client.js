// api가 동작한다고 가정
class ProductClient {
  fetchItems() {
    return fetch('http://example.com/login/id+password').then((response) =>
      response.json()
    );
  }
}

module.exports = ProductClient;
