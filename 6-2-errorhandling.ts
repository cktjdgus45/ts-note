{
    class NetworkClient {
        tryConnect(): void {
            throw new Error('no network');
        }
    }

    class UserService {
        constructor(private client: NetworkClient) { }

        login() {
            this.client.tryConnect();
        }
    }

    class App {
        constructor(private userService: UserService) { }
        run() {
            try {
                this.userService.login();
            } catch (error) {
                console.log('catched!');
                //show dialog to user ,"지금 오프라인 상태야. 라고 사용자에게알려주기."  //에러 핸들링하는 위치가 중요. 가장 적합한곳에서 catch.
            }
        }
    }
    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}