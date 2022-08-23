import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectivaPersonalizadaDirective } from './directivas/directiva-personalizada.directive';
import { CursosModule } from './curso/cursos/cursos.module';
import { AppMaterialModule } from './app.material.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    DirectivaPersonalizadaDirective,
    
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
