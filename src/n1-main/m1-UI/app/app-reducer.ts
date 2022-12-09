
//constants
export const SET_APP_STATUS = 'SET_APP_STATUS';
export const SET_APP_ERROR = 'SET_APP_ERROR';
export const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED';

const initialState: AppInitialStateType = {
    status: 'idle',
    error: null,
    isInitialized:false
}


export const appReducer = (state: AppInitialStateType = initialState, action: AllActionTypes): AppInitialStateType => {
    switch (action.type) {
        case SET_APP_STATUS:
            return {...state, status:action.payload.status}
        case SET_APP_ERROR:
            return {...state, error:action.payload.error}
        case SET_IS_INITIALIZED:
            return {...state, isInitialized:action.payload.isInitialized}
        default:
            return state
   }
}

//action creators
export const setAppStatusAC = (status: RequestedStatusType) =>
    ({type: SET_APP_STATUS, payload: {status}} as const )

export const setAppErrorAC = (error: string|null) =>
    ({type: SET_APP_ERROR, payload: {error}} as const )

export const setIsInitialized = (isInitialized: boolean) =>
    ({type: SET_IS_INITIALIZED, payload: {isInitialized}} as const )

//thunk creators

//types
export type SetAppStatusType = ReturnType<typeof setAppStatusAC>;
export type SetAppErrorType = ReturnType<typeof setAppErrorAC>;
export type SetIsInitializedActionType = ReturnType<typeof setIsInitialized>;

export type AllActionTypes = SetAppStatusType
     | SetAppErrorType
     | SetIsInitializedActionType

export type AppInitialStateType = {
    status: RequestedStatusType
    error:string | null
    isInitialized:boolean
}

export type RequestedStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';