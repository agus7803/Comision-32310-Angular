import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


import { Subscription, Observable } from 'rxjs';
import { AgregarDialogComponent } from 'src/app/cursos/components/agregar-dialog/agregar-dialog/agregar-dialog.component';
import { EditDialogComponent } from 'src/app/cursos/components/edit-dialog/edit-dialog/edit-dialog.component';
import { Curso } from 'src/app/modelo/curso';

import { CursosService } from '../../../../core/services/cursos.service';
import { AuthService } from '../../../../core/services/auth.service';
import { CursoState } from 'src/app/cursos/state/cursos.reducer';
import { Store } from '@ngrx/store';
import { cargarCursos, cursosCargados } from '../../../state/cursos.actions';
import { selectCursosCargadosState, selectCargandoState } from '../../../state/cursos.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';





@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {
  columnas: string[] = [ 'id', 'curso', 'salon', 'editar', 'eliminar'];
  dataSource!: MatTableDataSource<Curso>;
  suscripcionCurso!: Subscription;
  @ViewChild(MatTable) tabla!: MatTable<Curso>;
  cursos$!: Observable<Curso[]>;
  cargando$!: Observable<boolean>
  constructor(
    private dialog :MatDialog,
    private cursoService: CursosService,
    private auth: AuthService,
    private router: Router,
    private store: Store<CursoState>,
    private snackBar: MatSnackBar
  ) { 
     this.suscripcionCurso = this.cursoService.obtenerCurso().subscribe((cursos) => {
       this.dataSource = new MatTableDataSource(cursos);
     })
  }


  ngOnInit(): void {
    this.store.dispatch(cargarCursos());
    this.cursos$ = this.store.select(selectCursosCargadosState);
    this.cargando$ = this.store.select(selectCargandoState)
  }

  ngOnDestroy(): void {
    this.suscripcionCurso.unsubscribe();
  }

  eliminar(curso:Curso){
    this.cursoService.eliminarCurso(curso).subscribe((curso) =>{
      this.snackBar.open(`${curso.curso} fue eliminado correctamente`, 'Ok', {duration: 3000});
      this.store.dispatch(cargarCursos())
    });
  }

  editar(elemento:Curso){
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '350px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if(resultado){
        //se actualiza la info
        this.store.dispatch(cargarCursos())
      }
    })
  }
  agregar(){
    const dialogRef = this.dialog.open(AgregarDialogComponent, {
      width: '350px',
      data: [{
        id:'',
        curso:'',
        salon:''
      }],
    });
    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        //se agrega la info
        this.dataSource.data.push(resultado);
        this.tabla.renderRows();
        
      }
    })
  }

}
