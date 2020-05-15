import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  todos = JSON.parse(localStorage.getItem('todo')) || [];

  constructor() { }

  ngOnInit() {
  }

}
