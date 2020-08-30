import {createStore,combineReducers} from "redux";
import {evenCounterReducer} from "./reducers/evenCounterReducer";
import { counterReducer } from "./reducers/counterReducer";

const rootReducer=combineReducers({
    counter:counterReducer,
    evenCounter:evenCounterReducer
})

const store=createStore(rootReducer)

export default store