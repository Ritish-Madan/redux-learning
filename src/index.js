import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";


export const StoreContext = createContext();

const logger = ({ dispatch, getState }) => (next) => (action) =>{
  console.log("Hey MiddleWare Called ", action.type);
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));

class Provider extends React.Component {
  render(){
    const { store } = this.props;
    return (
    <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>
  )}
}

root.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>
);
