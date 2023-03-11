import ReactDOM from 'react-dom/client';
import App from "./App";
import "./index.css";
import {  createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { RootReducer } from "./redux/reducer/reducer";
import createSagaMiddleware from "redux-saga";
import sagaWatcher from "./redux/sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const saga = createSagaMiddleware();
//@ts-ignore
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(sagaWatcher);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);
