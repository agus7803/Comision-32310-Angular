import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsComponent } from './components/students/students/students.component';
import { SharedModule } from '../shared/shared.module';
import { AgregarDialogComponent } from './components/agregar-dialog/agregar-dialog/agregar-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog/edit-dialog.component';




@NgModule({
  declarations: [
    StudentsComponent,
    EditDialogComponent,
    AgregarDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CursosModule { }
