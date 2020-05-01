import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = JSON.parse(localStorage.getItem('todo')) || [];
  indexToRemove = 1;

  addTodo(todoValue: string) {
    if (todoValue) {
      this.todos.push(todoValue);
      localStorage.setItem('todo', JSON.stringify(this.todos));
    }
    // console.log(this.todolist);
  }

  removeTodo(todoValue: number) : void {
    this.todos.splice(todoValue, 1);
    this.todos.slice(this.indexToRemove, 1);
    localStorage.setItem('todo', JSON.stringify(this.todos));
    // console.log(this.todolist);
    // console.log(localStorage);
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
