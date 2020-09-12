import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";


const STORE_EMAIL = 'STORE_EMAIL';

const initialState = {
    email: ""
}

export function storeEmail(email){
    return {
        type: STORE_EMAIL,
        payload: {
            email: email
        }
    }
}

function userReducer(state=initialState, action){
    const {payload} = action;
    switch(action.type){
        case STORE_EMAIL:
            return {
                ...state,
                email: payload.email
            }
    }
}

let store = createStore(userReducer, composeWithDevTools());

export default store;