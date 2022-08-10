import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';

export interface Curso {
  curso: string;
  apellido: string;
  nombre: string;
  salon: number;
}

const ELEMENT_DATA: Curso[] = [
  { curso: 'Angular', apellido: 'Garcia', nombre: 'Abner', salon: 65 }, 
  { curso: 'VueJS', apellido: 'Vazquez', nombre: 'Agustin ', salon: 34 }, 
  { curso: 'ReactJS', apellido: 'Fernandez', nombre: 'Paula', salon: 87 }, 
  { curso: 'UI/UX', apellido: 'Dufort', nombre: 'Belen', salon: 12}, 
  { curso: '.NET', apellido: 'Viera', nombre: 'Florencia', salon: 90 }, 
  { curso: 'SQL', apellido: 'Baliosian', nombre: 'Matias', salon: 44}, 
  { curso: 'Web 3.0', apellido: 'Marquez', nombre: 'Esteban', salon: 63}
  
]

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  columnas: string[] = [ 'nombre', 'apellido', 'curso', 'salon', 'editar', 'eliminar'];
  dataSource: MatTableDataSource<Curso>= new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
