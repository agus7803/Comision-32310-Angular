import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './cursos/components/students/students/students.component';
import { EstudiantesComponent } from './estudiantes/components/estudiantes/estudiantes.component';

const routes: Routes = [
  {path: 'Cursos' , component:StudentsComponent},
  {path: 'Estudiantes', component:EstudiantesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
