import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatTable, MatTableDataSource } from '@angular/material/table';


import { Subscription, Observable } from 'rxjs';
import { RxjService } from 'src/app/shared/services/rxj.service';
import { AgregarDialogComponent } from '../../agregar-dialog/agregar-dialog/agregar-dialog.component';
import { EditDialogComponent } from '../../edit-dialog/edit-dialog/edit-dialog.component';

export interface Curso {
  nombre: string;
  apellido: string;
  curso: string;
  cedula: number;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {
  columnas: string[] = [ 'nombre', 'curso', 'cedula', 'editar', 'eliminar'];
  dataSource!: MatTableDataSource<Curso>;
  suscripcionCurso!: Subscription;
  dataSource$: Observable<any>;
  @ViewChild(MatTable) tabla!: MatTable<Curso>;
  constructor(
    private dialog :MatDialog,
    private rxjsService: RxjService,
  ) { 
    this.suscripcionCurso = this.rxjsService.obtenerCursos().subscribe((cursos) => {
      this.dataSource = new MatTableDataSource(cursos);
    })

    this.dataSource$ = this.rxjsService.obtenerCursos();

  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.suscripcionCurso.unsubscribe();
  }

  eliminar(elemento:Curso){
    this.dataSource.data = this.dataSource.data.filter((curso:Curso) => curso.nombre != elemento.nombre);
  }

  editar(elemento:Curso){
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '350px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        //se actualiza la info
        const item = this.dataSource.data.find(curso => curso.nombre === resultado.nombre);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        console.log(this.dataSource);
        this.tabla.renderRows();
      }
    })
  }
  agregar(){
    const dialogRef = this.dialog.open(AgregarDialogComponent, {
      width: '350px',
      data: [{
        nombre:'',
        apellido:'',
        curso:'',
        cedula:''
      }],
    });
    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        //se agrega la info
        const item = this.dataSource.data.find(curso => curso.nombre === resultado.nombre);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data.push(resultado);
        this.tabla.renderRows();
      }
    })
  }

}
