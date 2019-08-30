import { Injectable } from '@angular/core';
import { TodoService } from '../store/todo';
import { OtherService } from '../store/other';
import allActions from './constants';

 
@Injectable({
  providedIn: 'root'
})
export class Store {
  private root: any;

  constructor(
    public todoService: TodoService,
    public otherService: OtherService
    ) {
    this.root = {
      todo: this.todoService,
      other: this.otherService
    }
  }

  dispatch(action: string, payload: any) {  
    let sliceName = this.getSliceName(action);
    let slice = this.root[sliceName];
    slice.actions[action].call(this, {commit: this.commit.bind(this), state: slice.model.get(), root: this.root}, payload);
  }    

  commit(action: string, payload: any) {
    let sliceName = this.getSliceName(action);
    let slice = this.root[sliceName];
    slice.mutations[action].call(this, {model: slice.model, state: slice.model.get(), root: this.root}, payload);    
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
 
