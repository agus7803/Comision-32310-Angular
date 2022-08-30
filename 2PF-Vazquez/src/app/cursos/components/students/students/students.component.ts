import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatTable, MatTableDataSource } from '@angular/material/table';


import { Subscription, Observable } from 'rxjs';
import { AgregarDialogComponent } from 'src/app/cursos/components/agregar-dialog/agregar-dialog/agregar-dialog.component';
import { EditDialogComponent } from 'src/app/cursos/components/edit-dialog/edit-dialog/edit-dialog.component';
import { Curso, RxjService } from 'src/app/shared/services/rxj.service';




@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {
  columnas: string[] = [ 'id', 'curso', 'salon', 'editar', 'eliminar'];
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
    this.dataSource.data = this.dataSource.data.filter((curso:Curso) => curso.id != elemento.id);
  }

  editar(elemento:Curso){
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '350px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        //se actualiza la info
        const item = this.dataSource.data.find(curso => curso.id === resultado.id);
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
        id:'',
        curso:'',
        salon:''
      }],
    });
    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        //se agrega la info
        const item = this.dataSource.data.find(curso => curso.id === resultado.id);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data.push(resultado);
        this.tabla.renderRows();
      }
    })
  }

}
