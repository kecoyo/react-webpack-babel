import produce from 'immer';
import { defineAction } from '../actions';

const initialState = {};

const reducer = produce((state, action) => {
  switch (action.type) {
    case 'actSetUserInfo':
      Object.assign(state, action.payload);
      break;
    case 'actClearUserInfo':
      return {};
    default: {
      break;
    }
  }
  return state;
}, initialState);

defineAction('actSetUserInfo');
defineAction('actClearUserInfo');

export default reducer;
