import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatTable, MatTableDataSource } from '@angular/material/table';


import { Subscription, Observable } from 'rxjs';
import { Estudiante, RxjService } from 'src/app/core/services/rxj.service';
import { AgregarDialogComponent } from './agregar-dialog/agregar-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog/edit-dialog.component';



@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit, OnDestroy {
  columnas: string[] = [ 'nombre', 'curso', 'cedula', 'editar', 'eliminar'];
  dataSource!: MatTableDataSource<Estudiante>;
  suscripcionCurso!: Subscription;
  dataSource$!: Observable<any>;
  @ViewChild(MatTable) tabla!: MatTable<Estudiante>;
  constructor(
    private dialog :MatDialog,
    private rxjsService: RxjService,
  ) { 
    this.suscripcionCurso = this.rxjsService.obtenerEstudiantes().subscribe((estudiantes) => {
      this.dataSource = new MatTableDataSource(estudiantes);
    })



  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.suscripcionCurso.unsubscribe();
  }

  eliminar(elemento:Estudiante){
    this.dataSource.data = this.dataSource.data.filter((estudiantes:Estudiante) => estudiantes.nombre != elemento.nombre);
  }

  editar(elemento:Estudiante){
   const dialogRef = this.dialog.open(EditDialogComponent, {
    width: '350px',
    data: elemento
    });

     dialogRef.afterClosed().subscribe(resultado => {
       if(resultado){
         //se actualiza la info
        const item = this.dataSource.data.find(estudiantes => estudiantes.nombre === resultado.nombre);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
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
        const item = this.dataSource.data.find(estudiantes => estudiantes.nombre === resultado.nombre);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data.push(resultado);
        this.tabla.renderRows();
       }
     })
   }

}
