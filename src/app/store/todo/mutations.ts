
let ID = 2;

import constList from '../constants'
let actions = constList.todo;
import { initialState } from './initState';

export default {
  [actions.ADD_TODO]({model, root, state}, name: string) {
    const newTodo = { 
      id: ++ID,
      name,
      done: false
    }
    state.push(newTodo);

    model.set(state);
  },

  [actions.REMOVE_TODO]({model, state}, id: number) {
    state.splice(state.findIndex(todo => todo.id === id), 1);
    model.set(state);
  },

  [actions.TOGGLE_TODO]({model, state, root}, id: number) {
    const todo = state.find(todo => todo.id === id);
    todo.done = !todo.done;
    // show how to use other slice of state in todo slice logic:
    let { someAttr } = root.other.model._data.value;
    if (someAttr < 7) {
      model.set(state);
    }
  },

  [actions.RESET_TODOS]({model}) { 
    model.set(initialState());
  }
}