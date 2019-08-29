
let ID = 2;

import constList from '../constants'
let actions = constList.todo;

export default {
  [actions.ADD_TODO]({model, root, state}, name: string) {
    const todos = model.get();
    // if (root.otherSlice.myAttr === 3) {
    // }
    const newTodo = { 
      id: ++ID,
      name,
      done: false
    }
    todos.push(newTodo);

    model.set(todos);
  },

  [actions.REMOVE_TODO]({model}, id: number) {
    const todos = model.get();
    todos.splice(todos.findIndex(todo => todo.id === id), 1);
    model.set(todos);
  },

  [actions.TOGGLE_TODO]({model}, id: number) {
    const todos = model.get();
 
    const todo = todos.find(todo => todo.id === id);
    todo.done = !todo.done;
 
    model.set(todos);
  },

  [actions.RESET_TODOS]({model}) { 
    // model.set(todos);
  }
}