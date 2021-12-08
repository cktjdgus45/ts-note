{
    type LoadingState = {
        state: 'loading',
    }

    type SuccessState = {
        state: 'success',
        response: {
            body: string;
        }
    }
    type FailState = {
        state: 'fail',
        reason: string;
    }
    type ResourceLoadState = LoadingState | SuccessState | FailState;

    const printLoginState = (state: ResourceLoadState): void => {
        switch (state.state) {
            case 'loading':
                console.log(state.state)
                break;
            case 'success':
                console.log(state.response.body)
                break;
            case 'fail':
                console.log(state.reason);
                break;
            default:
                break;
        }
    }

    printLoginState({ state: 'loading' });
    printLoginState({ state: 'success', response: { body: 'loaded' } });
    printLoginState({ state: 'fail', reason: 'no network' });
}