import { combineReducers } from "redux";
import { Test_Reducer } from "./reducers/test-reducer";

const rootReducer = combineReducers({
    test: Test_Reducer,

});

export default rootReducer;
