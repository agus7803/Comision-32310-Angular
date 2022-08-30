import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';

import { SharedModule } from '../shared/shared.module';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { EditDialogComponent } from './components/estudiantes/edit-dialog/edit-dialog/edit-dialog.component';
import { AgregarDialogComponent } from './components/estudiantes/agregar-dialog/agregar-dialog.component';


@NgModule({
  declarations: [
    EstudiantesComponent,
    EditDialogComponent,
    AgregarDialogComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    SharedModule
  ]
})
export class EstudiantesModule { }
