import { ITodo } from './todoInterface';

export function initialState () {
    const initialData: ITodo[] = [
      { id: 0, name: 'Explore example', done: true },
      { id: 1, name: 'Add more todos', done: false },
      { id: 2, name: 'Toggle some todo', done: false }
    ];  
    return initialData;
}