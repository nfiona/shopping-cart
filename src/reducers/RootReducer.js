import cart from './CartReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  cart //ES6 short hand for {cart: cart}
})

export default rootReducer
