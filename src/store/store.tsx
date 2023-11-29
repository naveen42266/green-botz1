import{legacy_createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk"
// import { rootReducer } from './reducer'
// import ReecoReducer from './reducer/reducer'


// const store = legacy_createStore(ReecoReducer,applyMiddleware(thunk))
import { rootReducer } from './reducer'


const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}