class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      // 만약 Client를 사용하지 않고 아래와 같은 코드를 사용한다면
      // UserService는 네트워크 통신에 의존하기 때문에 단위 테스트를 하기 어렵다.
      //   return fetch('http://example.com/login/id+password').then((response) =>
      //     response.json()
      //   );

      // 따라서 Client를 사용하는 것이 좋음
      return this.userClient
        .login(id, password)
        .then((data) => (this.isLogedIn = true));
    }
  }
}

module.exports = UserService;
