// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
import {appReducer} from './app-reducer';
import {authReducer} from '../../../n2-featuress/f1-auth/au1-login/auth-reducer';
import { ThunkAction } from 'redux-thunk/es/types';
import { AnyAction, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {profileReducer} from '../profile/profile-reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    app:appReducer
})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare)
)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk<T = void> = ThunkAction<T,
    AppRootStateType,
    unknown,
    AnyAction>

//export type ThunkAppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
function legacy_createStore(rootReducer: any, arg1: any) {
    throw new Error('Function not implemented.');
}

