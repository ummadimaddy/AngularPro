import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonFormComponent } from './person-form/person-form.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path:'a',component:PersonFormComponent},
  {path:'b',component:SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
