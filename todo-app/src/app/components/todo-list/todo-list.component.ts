import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
  todos = JSON.parse(localStorage.getItem('todo')) || [];
  indexToRemove = 1;

  addTodo(todoValue: string) {
    if (todoValue) {
      this.todos.push(todoValue);
      localStorage.setItem('todo', JSON.stringify(this.todos));
    }
  }

  removeTodo(todoValue: number) : void {
    this.todos.splice(todoValue, 1);
    this.todos.slice(this.indexToRemove, 1);
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  deleteAllTodos() {
    if (confirm('Do you want to delete all of your To-dos?')) {
      localStorage.clear();
      location.reload();
    } else { }
  }

  constructor() { }

  ngOnInit() {
  }

}






















// onNameChange(val) {
  //   console.log("Changed", val);
  //   localStorage.setItem('todo', JSON.stringify(val));
  //   localStorage.getItem('todo');
  // }