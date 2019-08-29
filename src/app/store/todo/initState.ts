export function initialState () {
    const initialData: Todo[] = [
      { id: 0, name: 'Explore example', done: true },
      { id: 1, name: 'Add more todos', done: false },
      { id: 2, name: 'Toggle some todo', done: false }
    ];  
    return initialData;
}