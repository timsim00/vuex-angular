import { Injectable } from '@angular/core';
import { Model, ModelFactory } from '@angular-extensions/model';
import { Observable } from 'rxjs';

import OtherActions from './actions'
import OtherMutations from './mutations';

import { IOther } from './otherInterface';

import { initialState } from './initState';
const initialData: IOther = initialState();

@Injectable({
  providedIn: 'root'
})
export class OtherService {
  public model: Model<IOther>;
  other$: Observable<IOther>;
  public actions: OtherActions;
  public mutations: OtherMutations;

  constructor(private modelFactory: ModelFactory<IOther>) {
    this.model = this.modelFactory.create(initialData);
    this.other$ = this.model.data$;
    this.actions = OtherActions;
    this.mutations = OtherMutations;
  }

  // leaving these here if you really want to dispatch/commit from the model instead of the store root:
  // dispatch(action: string, payload: any) {
  //   this.actions[action].call(this, {commit: this.commit.bind(this)}, payload);
  // }    
  // commit(action: string, payload: any) {
  //   this.mutations[action].call(this, {model: this.model}, payload);
  // }
 
}
 