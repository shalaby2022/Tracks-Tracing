import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";


const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            return { errorMessage: '', token: action.payload }
        case 'signout':
            return { token: null, errorMessage: '' }
        case 'clear_error_msg':
            return { ...state, errorMessage: '' }
        default:
            return state
    }
}


const tryLocalSignIn = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem("token")
        if (token) {
            dispatch({ type: 'signin', payload: token })
            navigate('TrackTabs')
        } else {
            navigate('Signin')
        }
    }
}

const clearErrorMsg = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_error_msg' })
    }
}

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            console.log(response.data.token);
            dispatch({ type: 'signin', payload: response.data.token })

            navigate('TrackTabs')
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with Sign Up' })
        }
    }
}


const signin = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signin', { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            console.log(response.data.token)
            dispatch({ type: 'signin', payload: response.data.token })

            navigate('TrackTabs')
        } catch (err) {
            console.log(err)
            dispatch({ type: 'add_error', payload: 'Something went wrong with Sign in' })
        }
    }
}

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token')
        dispatch({ type: 'signout' })
        navigate("Signin")
    }
}


export const { Context, Provider } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMsg, tryLocalSignIn },
    { token: null, errorMessage: '' }
)