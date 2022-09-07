import { Injectable } from '@angular/core';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { BehaviorSubject, catchError, map, Subject, throwError } from 'rxjs';
import { Sesion } from 'src/app/modelo/sesion';
import { Usuario } from 'src/app/modelo/usuario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sesionSubject!: BehaviorSubject<Sesion>;
  private api: string = environment.api;

  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const sesion: Sesion = {
      sesionActiva: false,
    }
    this.sesionSubject = new BehaviorSubject(sesion);
   }


   iniciarSesion(usuario: Usuario){
    this.http.get<Usuario[]>(`${this.api}/usuarios`).pipe(

      map((usuarios: Usuario[]) => {
        return  usuarios.filter((u: Usuario) => u.usuario === usuario.usuario && u.contrasenia === usuario.contrasenia)[0];
      }) 
    ).subscribe((usuario: Usuario) => {
      console.log('el usuario es', usuario);
      if(usuario){

        const sesion: Sesion = {
          sesionActiva: true,
          usuario: {
            usuario: usuario.usuario,
            contrasenia: usuario.contrasenia
          }
        }
        this.sesionSubject.next(sesion);
        this.router.navigate(['/Cursos']);
      }else{
        alert('No se encontro el usuario');
      }
    }) 
   }

   cerrarSesion(){
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject.next(sesion);
   }

   obtenerSesion(){
    return this.sesionSubject.asObservable();
   }

   private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.status, error.message);
    }
    return throwError(() => new Error('Error en la comunicacion HTTP'));
   }
}
