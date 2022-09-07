import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { StudentsComponent } from '../cursos/components/students/students/students.component';
import { EstudiantesComponent } from '../estudiantes/components/estudiantes/estudiantes.component';



const routes: Routes = [
  {path: 'Cursos', component: StudentsComponent, canActivate: [AuthGuard]},
  // {
  //   path: 'cursos',
  //   loadChildren: () => import('../cursos/cursos.module').then((m) => m.CursosModule),
  //   canActivate: [AuthGuard]
  // },
  {path: 'Estudiantes', component:EstudiantesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ToolBarRoutingModule { }
