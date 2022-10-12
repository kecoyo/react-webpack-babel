import store from './create-store';
import actions from './actions';

export function dispatch(name, payload) {
  try {
    store.dispatch(actions[name](payload));
  } catch (err) {
    const newErr = new Error(`${err.message} -- name: ${name}, payload: ${JSON.stringify(payload)}`);
    throw newErr;
  }
}
