{
    //세부적인 error 다루기 any가 아닌 - ERROR STATE;
    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';  //예상가능한 상태를 코딩.
    }

    type SuccessState = {
        result: 'success';
    }
    type ResultState = SuccessState | NetworkErrorState;
    class NetworkClient {
        tryConnect(): ResultState {
            //
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
            } catch (error) { //catch block의 error는 any 타입이다. 세부적인 error를나누고싶을떈 6-3 error state 사용.
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