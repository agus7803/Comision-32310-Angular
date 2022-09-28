import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/modelo/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private api: string = environment.api;
  constructor(
    private http:HttpClient
  ) { }

  obtenerCurso(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.api}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'aplication/json',
        'encoding': 'UTF-8'
      })
    })
  }

  nuevoCurso(curso:Curso): Observable<Curso>{
    return this.http.post<Curso>(`${this.api}/cursos`, curso);
  }

  modificarCurso(curso:Curso){
    return this.http.put<Curso>(`${this.api}/cursos/${curso.id}`, curso);
  }

  eliminarCurso(curso:Curso){
    return this.http.delete<Curso>(`${this.api}/cursos/${curso.id}`);
  }
}
