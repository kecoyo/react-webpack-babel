import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

const STORE_KEY = '__store_data';

let preloadedState = {};
let storeData = window.sessionStorage.getItem(STORE_KEY);
if (storeData) {
  storeData = JSON.parse(storeData);
  preloadedState = {
    ...storeData,
  };
}

const store = createStore(reducers, preloadedState, applyMiddleware(thunk, logger));

// 组件订阅 store，传递一个函数，只要 store 数据改变，这个函数就会被执行
store.subscribe(() => {
  window.sessionStorage.setItem(STORE_KEY, JSON.stringify(store.getState()));
});

window.store = store;
export default store;
