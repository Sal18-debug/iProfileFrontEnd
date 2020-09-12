import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";


const STORE_EMAIL = 'STORE_EMAIL';

const initialState = {
    email: ""
}

export function storeEmail(email){
    console.log('store email action')
    return {
        type: STORE_EMAIL,
        payload: {
            email: email
        }
    }
}

function userReducer(state=initialState, action){
    console.log('reducer hit')
    const {payload} = action;
    switch(action.type){
        case STORE_EMAIL:
            console.log('case store email')
            return {
                ...state,
                email: payload.email
            }
        default:
            return state
    }
}

let store = createStore(userReducer, composeWithDevTools());

export default store;