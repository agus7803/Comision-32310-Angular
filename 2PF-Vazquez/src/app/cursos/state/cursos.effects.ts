import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as CursosActions from './cursos.actions';
import { CursosService } from '../../core/services/cursos.service';
import { Curso } from 'src/app/modelo/curso';
import { cargarCursos, cursosCargados } from './cursos.actions';

@Injectable()
export class CursosEffects {


  cargarCursos$ = createEffect(() => 
     this.actions$.pipe( 
      ofType(cargarCursos),
      mergeMap(() => this.cursosService.obtenerCurso().pipe(
        map((c: Curso[]) => (cursosCargados({cursos: c})))
      ))
   ) );

  constructor(
    private actions$: Actions,
    private cursosService: CursosService
  ) {}
}
