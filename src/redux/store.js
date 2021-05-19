import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { SIGN_IN_WITH_GOOGLE } from "./constants";

const initialState = {
  user: null,
  autheduser: undefined,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_WITH_GOOGLE:
      return {
        ...state,
        user: action.payload,
        autheduser: !state.autheduser,
      };
    default:
      return state;
  }
};

const store = createStore(Reducer, applyMiddleware(thunk, logger));

export default store;
