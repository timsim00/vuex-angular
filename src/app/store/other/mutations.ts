
import constList from '../constants'
let actions = constList.other;
import { initialState } from './initState';

export default {
  [actions.SOME_ACTION]({model, state}, id: number) {
    state.someAttr = 7;
    model.set(state);
  },

  [actions.RESET_OTHER]({model}) { 
    model.set(initialState());
  }
}