import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { StudentsComponent } from './components/students/students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarDialogComponent } from './components/agregar-dialog/agregar-dialog.component';
import { DirectivaPersonalizadaDirective } from './directivas/directiva-personalizada.directive';
import { PipePersonalizadoPipe } from './pipes/pipe-personalizado.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    StudentsComponent,
    EditDialogComponent,
    AgregarDialogComponent,
    DirectivaPersonalizadaDirective,
    PipePersonalizadoPipe,
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
