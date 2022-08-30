import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaPersonalizadaDirective } from './directivas/directiva-personalizada.directive';
import { PipePersonalizadoPipe } from './pipes/pipe-personalizado.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app.material.module';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';





@NgModule({
  declarations: [
    DirectivaPersonalizadaDirective,
    PipePersonalizadoPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    AppMaterialModule,
    DirectivaPersonalizadaDirective,
    PipePersonalizadoPipe,
    MatFormFieldModule
  ]
})
export class SharedModule { }
