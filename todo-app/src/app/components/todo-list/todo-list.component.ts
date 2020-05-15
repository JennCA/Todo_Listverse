import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
  todos = JSON.parse(localStorage.getItem('todo')) || [];
  indexToRemove = 1;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0) {
      return;
    }
 
    var type = files[0].type;
    if (type.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  

  addTodo(todoValue: string) {
    if (todoValue) {
      this.todos.push(todoValue);
      localStorage.setItem('todo', JSON.stringify(this.todos));
    }
  }

  editTask(todoValue: number){
    let task = this.todos[todoValue];
    let result = prompt("Edit Todo Task:", task);
    if (result !== null && result !== ""){
      this.todos[todoValue] = result;
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
    console.log(this.todos);
  }

}






















// onNameChange(val) {
  //   console.log("Changed", val);
  //   localStorage.setItem('todo', JSON.stringify(val));
  //   localStorage.getItem('todo');
  // }