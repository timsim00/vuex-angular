import constList from '../constants'
let actions = constList.todo;

export default {
  [actions.ADD_TODO]({commit, model}, name: string) {
    // TODO: add an api call here.
    commit(actions.ADD_TODO, name);
  },

  [actions.REMOVE_TODO]({commit, model}, id: number) {
    commit(actions.REMOVE_TODO, id);
  },

  [actions.TOGGLE_TODO]({commit, root}, id: number) {
    // root.todo.todos$.subscribe(todos => console.log('*** root', todos));
    console.log('*** todos', root.todo.model._data.value);
    commit(actions.TOGGLE_TODO, id);
  },

  [actions.RESET_TODOS]({commit}) {
    commit(actions.RESET_TODOS);
  }   
}
