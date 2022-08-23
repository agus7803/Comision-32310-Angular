import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarDialogComponent } from './agregar-dialog/agregar-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { StudentsComponent } from './students/students.component';
import { AppMaterialModule } from 'src/app/app.material.module';
import { PipePersonalizadoPipe } from './pipes/pipe-personalizado.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentsComponent,
    EditDialogComponent,
    AgregarDialogComponent,
    PipePersonalizadoPipe,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ]
})
export class CursosModule { }
