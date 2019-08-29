import { Injectable } from '@angular/core';
// import { Model, ModelFactory } from '@angular-extensions/model';
// import { Observable } from 'rxjs';

import { TodoService } from '../store/todo';
import allActions from './constants'

export interface IStore {

}

const initialData: Store[] = [
];
 
@Injectable({
  providedIn: 'root'
})
export class Store {
  private root: any;

  constructor(
    public todoService: TodoService
    ) {
    this.root = {
      todo: this.todoService
    }
  }

  dispatch(action: string, payload: any) {  
    let sliceName = this.getSliceName(action);
    let slice = this.root[sliceName];
    slice.actions[action].call(this, {commit: this.commit.bind(this), root: this.root}, payload);
  }    

  commit(action: string, payload: any) {
    let sliceName = this.getSliceName(action);
    let slice = this.root[sliceName];
    slice.mutations[action].call(this, {model: slice.model, root: this.root}, payload);    
  }

  getSliceName(action) {
    // find the slice name where the action resides:
    let sliceNames = Object.keys(allActions);
    let len = sliceNames.length;
    for (var i = 0; i < len; i++) {
      if (action in allActions[sliceNames[i]]) {
        break;
      }
    }
    return sliceNames[i];
  }
 
}
 
