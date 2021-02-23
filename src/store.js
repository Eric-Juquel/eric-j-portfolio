import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {languageReducer} from './reducers/languageReducer';

const reducer = combineReducers({
    languageReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
)

export default store