import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from '../cursos/components/students/students/students.component';


const routes: Routes = [
  {path: 'Alumnos' , component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ToolBarRoutingModule { }
