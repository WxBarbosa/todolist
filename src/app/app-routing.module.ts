import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [
  { path: '', redirectTo:'/task', pathMatch: 'full'},
  { path: 'task', component: TasklistComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
