{
    //실전예제
    //funcion : login ->success,fail
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        }
    }
    type FailState = {
        result: 'fail';
        reason: {
            body: string;
        }
    }
    type LoginState = SuccessState | FailState;

    function login(id: string, password: string): LoginState {
        return {
            result: 'success',
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
        state.result //success or fail , 둘다 갖고있어서 ts가 알고있음
        if (state.result === 'success') {
            console.log(`${state.response.body}`);
        } else {
            console.log(`${state.reason.body}`);
        }
    }
}