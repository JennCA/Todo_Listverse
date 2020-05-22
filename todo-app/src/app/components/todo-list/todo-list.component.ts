import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
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

  ngOnInit() { }

}

class TodoTask {
  title: string;
  note: string;
  image: string;

  constructor(theTitle: string) {
    this.title = theTitle;
  }
}






















// onNameChange(val) {
  //   console.log("Changed", val);
  //   localStorage.setItem('todo', JSON.stringify(val));
  //   localStorage.getItem('todo');
  // }