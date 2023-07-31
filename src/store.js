import { applyMiddleware, legacy_createStore } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';


export const store = legacy_createStore(
    reducer,
    applyMiddleware(thunk), // this is middleware(we can use dispatch in other dispatch using thunk)
); // a store id created here