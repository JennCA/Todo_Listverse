import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  // todos = JSON.parse(localStorage.getItem('todo')).sort(this.soFunc) || [];
  todos = JSON.parse(localStorage.getItem('todo')) || [];

  indexToRemove = 1;

  save() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }
 
  addTodo(todoTitle: string) {
    if (todoTitle) {
      const newTodoTask = new TodoTask(todoTitle);
      this.todos.push(newTodoTask);
      this.save();
    }
  }

  editTask(todoIndex: number) {
    localStorage.setItem('editIndex', JSON.stringify(todoIndex));
  }

  removeTodo(todoValue: number) : void {
    this.todos.splice(todoValue, 1);
    this.todos.slice(this.indexToRemove, 1);
    this.save();
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

class TodoTask {
  title: string;
  note: string;
  image: string;

  constructor(theTitle: string) {
    this.title = theTitle;
  }
}


















  // sortArray() {
  //   let Array = this.todos.sort((a, b) => a.title - b.title);
  //   return Array;
  // }
  // soFunc(a, b) {
  //   if ( a.title < b.title ){
  //     return -1;
  //   }
  //   if ( a.title > b.title ){
  //     return 1;
  //   }
  //   return 0;
