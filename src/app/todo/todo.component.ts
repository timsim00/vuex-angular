import { Component } from '@angular/core';
// import { TodoService } from './todo.service';
import { TodoService } from '../store/todo';
import constList from '../store/constants';
let actions = constList.todo;
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
      this.store.dispatch(actions.ADD_TODO, name);
    }
  }

  removeTodo(id: number) {
    // this.todoService.dispatch(actions.REMOVE_TODO, id);
    this.store.dispatch(actions.REMOVE_TODO, id);
  }

  toggleTodo(id: number) {
    // this.todoService.dispatch(actions.TOGGLE_TODO, id);
    this.store.dispatch(actions.TOGGLE_TODO, id);
  }
}