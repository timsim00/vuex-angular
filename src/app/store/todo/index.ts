import { Injectable } from '@angular/core';
import { Model, ModelFactory } from '@angular-extensions/model';
import { Observable } from 'rxjs';

import TodoActions from './actions'
import TodoMutations from './mutations';

export interface Todo {
  id: number;
  name: string;
  done: boolean;
}

const initialData: Todo[] = [
  { id: 0, name: 'Explore example', done: true },
  { id: 1, name: 'Add more todos', done: false },
  { id: 2, name: 'Toggle some todo', done: false }
];
 
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public model: Model<Todo[]>;
  todos$: Observable<Todo[]>;
  public actions: TodoActions;
  public mutations: TodoMutations;

  constructor(private modelFactory: ModelFactory<Todo[]>) {
    this.model = this.modelFactory.create(initialData);
    this.todos$ = this.model.data$;
    this.actions = TodoActions;
    this.mutations = TodoMutations;
  }

  // dispatch(action: string, payload: any) {
  //   this.actions[action].call(this, {commit: this.commit.bind(this)}, payload);
  // }    

  // commit(action: string, payload: any) {
  //   this.mutations[action].call(this, {model: this.model}, payload);
  // }
 
}
 