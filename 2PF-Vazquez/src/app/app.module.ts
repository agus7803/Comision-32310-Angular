import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosModule } from './cursos/cursos.module';
import { SharedModule } from './shared/shared.module';
import { ToolBarComponent } from './toolbar/components/toolbar.component';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CursosModule,
    EstudiantesModule,
    SharedModule,
    ToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
