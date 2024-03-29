import { Injectable } from '@angular/core';
import { Model, ModelFactory } from '@angular-extensions/model';
import { Observable } from 'rxjs';

import TodoActions from './actions'
import TodoMutations from './mutations';

import { ITodo } from './todoInterface';

import { initialState } from './initState';
const initialData: ITodo[] = initialState();

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public model: Model<ITodo[]>;
  todos$: Observable<ITodo[]>;
  public actions: TodoActions;
  public mutations: TodoMutations;

  constructor(private modelFactory: ModelFactory<ITodo[]>) {
    this.model = this.modelFactory.create(initialData);
    this.todos$ = this.model.data$;
    this.actions = TodoActions;
    this.mutations = TodoMutations;
  }

  // leaving these here if you really want to dispatch/commit from the model instead of the store root:
  // dispatch(action: string, payload: any) {
  //   this.actions[action].call(this, {commit: this.commit.bind(this)}, payload);
  // }    
  // commit(action: string, payload: any) {
  //   this.mutations[action].call(this, {model: this.model}, payload);
  // }
 
}
 