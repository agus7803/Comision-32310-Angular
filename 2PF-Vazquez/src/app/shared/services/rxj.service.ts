import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
export interface Estudiante {
  nombre: string;
  apellido: string;
  curso: string;
  cedula: number;
}

export interface Curso {
  id: number;
  curso: string;
  salon: number;
}

@Injectable({
  providedIn: 'root'
})
export class RxjService {
  private observableCurso: Observable<any>;
  private observableEstudiante: Observable<any>;
  estudiantes: any[] = [
    { curso: 'Angular', apellido: 'Garcia', nombre: 'Abner', cedula: 42314432 }, 
    { curso: 'VueJS', apellido: 'Vazquez', nombre: 'Agustin ', cedula: 34567893 }, 
    { curso: 'ReactJS', apellido: 'Fernandez', nombre: 'Paula', cedula: 87122215 }, 
    { curso: 'UI/UX', apellido: 'Dufort', nombre: 'Belen', cedula: 12900987 }, 
    { curso: '.NET', apellido: 'Viera', nombre: 'Florencia', cedula: 60654438 }, 
    { curso: 'SQL', apellido: 'Baliosian', nombre: 'Matias', cedula: 44122345 }, 
    { curso: 'Web 3.0', apellido: 'Marquez', nombre: 'Esteban', cedula: 63621789}
  ]
  cursos: any[] = [
    { id: 1, curso: 'Angular', salon: 23 }, 
    { id: 2, curso: 'VueJS', salon: 45 }, 
    { id: 3, curso: 'ReactJS', salon: 20 }, 
    { id: 4, curso: 'UI/UX', salon: 14 }, 
    { id: 5, curso: '.NET', salon: 16 }, 
    { id: 6, curso: 'SQL', salon: 33 }, 
    { id: 7, curso: 'Web 3.0', salon: 10}
  ]

  constructor() { 
    this.observableCurso = new Observable<any>((suscriptor) =>{
      suscriptor.next(this.cursos);

      suscriptor.complete();
    })
    this.observableEstudiante = new Observable<any>((suscriptor) =>{
      suscriptor.next(this.estudiantes);
      
      suscriptor.complete();
    })
  }

  obtenerPromiseCurso(){
    return new Promise((resolve, rejects) => {
      if(this.estudiantes.length > 0){
        resolve(this.estudiantes);
      }else{
        rejects({
          codigo: 0,
          mensaje: 'No hay cursos en esta tabla.'
        });
      }
    });
  }

  obtenerCursos(){
    return this.observableCurso;
  }

  obtenerEstudiantes(){
    return this.observableEstudiante;
  }
}
