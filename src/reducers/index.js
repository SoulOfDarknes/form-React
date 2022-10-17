import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import feedback from "./feedback";


const rootReducer = combineReducers({
    form: feedback,
});

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));