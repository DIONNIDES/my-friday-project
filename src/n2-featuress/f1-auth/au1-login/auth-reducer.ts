
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';

let initialState = {isLoggedIn: false}

export const authReducer = (state: InitialStateType = initialState, action: AllLAuthActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.payload.isLoggedIn};
        default:
            return state
    }
}

//action creators
export const setIsLoggedIn = (isLoggedIn: boolean) =>
    ({type: SET_IS_LOGGED_IN, payload: {isLoggedIn}} as const)


//thunk creators



//types
export type SetIsLoggedInActionType = ReturnType<typeof setIsLoggedIn>;
type InitialStateType = {
    isLoggedIn: boolean
}
export type AllLAuthActionTypes = SetIsLoggedInActionType
