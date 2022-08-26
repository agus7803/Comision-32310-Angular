import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from 'src/app/shared/app.material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AgregarDialogComponent } from './components/agregar-dialog/agregar-dialog/agregar-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog/edit-dialog.component';
import { StudentsComponent } from './components/students/students/students.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StudentsComponent,
    EditDialogComponent,
    AgregarDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CursosModule { }
