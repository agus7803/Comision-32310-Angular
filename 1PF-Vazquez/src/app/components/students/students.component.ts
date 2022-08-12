import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { AgregarDialogComponent } from '../agregar-dialog/agregar-dialog.component';

export interface Curso {
  nombre: string;
  apellido: string;
  curso: string;
  cedula: number;
}

const ELEMENT_DATA: Curso[] = [
  { curso: 'Angular', apellido: 'Garcia', nombre: 'Abner', cedula: 42314432 }, 
  { curso: 'VueJS', apellido: 'Vazquez', nombre: 'Agustin ', cedula: 34567893 }, 
  { curso: 'ReactJS', apellido: 'Fernandez', nombre: 'Paula', cedula: 87122215 }, 
  { curso: 'UI/UX', apellido: 'Dufort', nombre: 'Belen', cedula: 12900987 }, 
  { curso: '.NET', apellido: 'Viera', nombre: 'Florencia', cedula: 60654438 }, 
  { curso: 'SQL', apellido: 'Baliosian', nombre: 'Matias', cedula: 44122345 }, 
  { curso: 'Web 3.0', apellido: 'Marquez', nombre: 'Esteban', cedula: 63621789}
  
]

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  columnas: string[] = [ 'nombre', 'curso', 'cedula', 'editar', 'eliminar'];
  dataSource: MatTableDataSource<Curso>= new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<Curso>;
  constructor(
    private dialog :MatDialog,
  ) { }

  ngOnInit(): void {
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
