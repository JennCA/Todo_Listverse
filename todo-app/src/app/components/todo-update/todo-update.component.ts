import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  todos = JSON.parse(localStorage.getItem('todo')) || [];
  index = JSON.parse(localStorage.getItem('editIndex'));

  todoTask = this.todos[this.index];
  public message: string;

  updateTodo() {
    this.todos[this.index] = this.todoTask;
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  uploadImage(files) {
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
      this.todoTask.image = reader.result;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
