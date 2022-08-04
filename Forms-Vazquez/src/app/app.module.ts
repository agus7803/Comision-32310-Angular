import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioReactivoComponent } from './Components/formulario-reactivo/formulario-reactivo.component';
import { ContainerComponent } from './Components/container/container.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioReactivoComponent,
    ContainerComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
