{
    //*Union Types : OR , 굉장히 많이 씀.

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    const title: TileSize = 16;

    //실전예제
    //funcion : login ->success,fail
    type SuccessState = {
        response: {
            body: string;
        }
    }
    type FailState = {
        reason: {
            body: string;
        }
    }
    type LoginState = SuccessState | FailState;

    function login(id: string, password: string): LoginState {
        return {
            response: {
                body: 'lodded in!'
            }
        }
    }
    //success - > body
    //fail -> reason
    function printLoginState(state: LoginState): void {
        // if('response'in state){
        //     console.log(`${state.response.body}`);
        // }else{
        //     console.log(`${state.reason.body}`);
        // }  똥 ->해결: 차별화.ts
    }
}