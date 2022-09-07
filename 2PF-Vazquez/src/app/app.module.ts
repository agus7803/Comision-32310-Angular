import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosModule } from './cursos/cursos.module';
import { SharedModule } from './shared/shared.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { ToolBarComponent } from './toolbar/components/toolbar.component';
import { AuthService } from './core/services/auth.service';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CursosModule,
    EstudiantesModule,
    SharedModule,
    ToolbarModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
