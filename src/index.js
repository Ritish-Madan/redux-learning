import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";


const logger = ({ dispatch, getState }) => (next) => (action) =>{
  if(typeof (action) === 'function'){
    console.log("HERE in function middleware action")
    action(dispatch)
    return;
  }
  console.log("Hey MiddleWare Called ", action.type);
  next(action);
}

const store = createStore(rootReducer,   applyMiddleware(logger));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
