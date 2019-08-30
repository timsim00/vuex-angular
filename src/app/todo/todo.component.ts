import { Component } from '@angular/core';
// import { TodoService } from './todo.service';
import { TodoService } from '../store/todo';
import allActions from '../store/constants';
let todo = allActions.todo;
import { Store } from '../store';

@Component({
  selector: 'my-todo',
  template: `
    <!-- template subscription to todos using async pipe -->
    <ng-container *ngIf="todoService.todos$ | async as todos">
      <h1>Todo List | {{todos.length}}</h1>
      <ul>
        <li class="todo" *ngFor="let todo of todos">
          <span [ngClass]="{ done: todo.done }"
                (click)="toggleTodo(todo.id)">
            {{todo.name}} <button (click)="removeTodo(todo.id)">x</button>
          </span>
        </li>
      </ul>
      <div>
        <input type="text" #newTodoName>
        <button (click)="addTodo(newTodoName.value);newTodoName.value=''">
          Add todo
        </button>
      </div>
      <p>Click on todo to toggle its state</p> 
      <button (click)="resetTodoList();">
          Reset Todos
      </button>
      <button (click)="otherAction();" style="float:right">
          Other Action
      </button> 
      <button (click)="resetOther();" style="float:right">
          Reset Other
      </button>           
    </ng-container>
  `,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  private store: Store;

  constructor(public storeClass: Store, public todoService: TodoService) {  
    this.store = storeClass;
  }
 
  addTodo(name: string) {
    if (name.length) {
      // this.todoService.dispatch(actions.ADD_TODO, name);
      this.store.dispatch(todo.ADD_TODO, name);
    }
  }

  removeTodo(id: number) {
    // this.todoService.dispatch(actions.REMOVE_TODO, id);
    this.store.dispatch(todo.REMOVE_TODO, id);
  }

  toggleTodo(id: number) {
    // this.todoService.dispatch(actions.TOGGLE_TODO, id);
    this.store.dispatch(todo.TOGGLE_TODO, id);
  }

  resetTodoList() {
    this.store.dispatch(todo.RESET_TODOS);
  }

  otherAction() {
    this.store.dispatch(allActions.other.SOME_ACTION);
  }  

  resetOther() {
    this.store.dispatch(allActions.other.RESET_OTHER);
  }  
}