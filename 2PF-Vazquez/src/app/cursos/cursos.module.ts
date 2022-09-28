import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsComponent } from './components/students/students/students.component';
import { SharedModule } from '../shared/shared.module';
import { AgregarDialogComponent } from './components/agregar-dialog/agregar-dialog/agregar-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog/edit-dialog.component';
import { StoreModule } from '@ngrx/store';
import * as fromCursos from './state/cursos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './state/cursos.effects';




@NgModule({
  declarations: [
    StudentsComponent,
    EditDialogComponent,
    AgregarDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(fromCursos.cursosFeatureKey, fromCursos.reducer),
    EffectsModule.forFeature([CursosEffects])
  ]
})
export class CursosModule { }
