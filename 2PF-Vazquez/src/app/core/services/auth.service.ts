import { Injectable } from '@angular/core';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { BehaviorSubject, catchError, map, Subject, throwError } from 'rxjs';
import { Sesion } from 'src/app/modelo/sesion';
import { Usuario } from 'src/app/modelo/usuario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { crearSesion } from 'src/app/state/actions/usuario.action';
import { usuarioReducer } from '../../state/reducers/usuario.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sesionSubject!: BehaviorSubject<Sesion>;
  private api: string = environment.api;

  
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {
    const sesion: Sesion = {
      sesionActiva: false,
    }
    this.sesionSubject = new BehaviorSubject(sesion);
   }


   iniciarSesion(nombreUsuario: string, contrasenia:string, admin:boolean){
    return this.http.get<Usuario[]>(`${this.api}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter((usuario: Usuario) => usuario.nombreUsuario === nombreUsuario && usuario.contrasenia === contrasenia && usuario.admin === admin)[0]
      })).subscribe((usuario:Usuario) => {
        if(usuario){
         this.store.dispatch(crearSesion({usuario: usuario}));
          const sesion: Sesion = {
            sesionActiva: true,
            usuario: {
              nombreUsuario: usuario.nombreUsuario,
              contrasenia: usuario.contrasenia,
              admin: usuario.admin,
              id:''
            }
          }
          this.sesionSubject.next(sesion);
          this.router.navigate(['/Cursos']);
        }else{
          alert('No se encontro el usuario');
        }
    }
      ) 
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
