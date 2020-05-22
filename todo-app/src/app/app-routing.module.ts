import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoUpdateComponent } from './components/todo-update/todo-update.component';


const routes: Routes = [
  { path: 'list', component: TodoListComponent },
  { path: 'edit', component: TodoUpdateComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
