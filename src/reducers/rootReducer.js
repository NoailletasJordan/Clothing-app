import { combineReducers } from 'redux'

import auth from './auth'
import cart from './cart'
import notification from "./notification";

const rootReducer = combineReducers({
    auth,
    cart,
    notification
    })


export default rootReducer