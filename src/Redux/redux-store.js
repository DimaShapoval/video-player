import { combineReducers, legacy_createStore as createStore } from "redux";
import mainReducer from "./mainReducer";

let reducers = combineReducers({
    mainPage: mainReducer,
})

let store = createStore(reducers);

export default store;