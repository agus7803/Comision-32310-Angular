import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Curso {
  nombre: string;
  apellido: string;
  curso: string;
  cedula: number;
}

@Injectable({
  providedIn: 'root'
})
export class RxjService {
  private observableCurso: Observable<any>;
  cursos: any[] = [
    { curso: 'Angular', apellido: 'Garcia', nombre: 'Abner', cedula: 42314432 }, 
    { curso: 'VueJS', apellido: 'Vazquez', nombre: 'Agustin ', cedula: 34567893 }, 
    { curso: 'ReactJS', apellido: 'Fernandez', nombre: 'Paula', cedula: 87122215 }, 
    { curso: 'UI/UX', apellido: 'Dufort', nombre: 'Belen', cedula: 12900987 }, 
    { curso: '.NET', apellido: 'Viera', nombre: 'Florencia', cedula: 60654438 }, 
    { curso: 'SQL', apellido: 'Baliosian', nombre: 'Matias', cedula: 44122345 }, 
    { curso: 'Web 3.0', apellido: 'Marquez', nombre: 'Esteban', cedula: 63621789}
  ]
  constructor() { 
    this.observableCurso = new Observable<any>((suscriptor) =>{
      suscriptor.next(this.cursos);

      suscriptor.complete();
    })
  }

  obtenerPromiseCurso(){
    return new Promise((resolve, rejects) => {
      if(this.cursos.length > 0){
        resolve(this.cursos);
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

}
