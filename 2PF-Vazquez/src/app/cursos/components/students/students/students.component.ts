import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


import { Subscription} from 'rxjs';
import { AgregarDialogComponent } from 'src/app/cursos/components/agregar-dialog/agregar-dialog/agregar-dialog.component';
import { EditDialogComponent } from 'src/app/cursos/components/edit-dialog/edit-dialog/edit-dialog.component';
import { Curso } from 'src/app/modelo/curso';

import { CursosService } from '../../../../core/services/cursos.service';
import { AuthService } from '../../../../core/services/auth.service';




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
  constructor(
    private dialog :MatDialog,
    private cursoService: CursosService,
    private auth: AuthService,
    private router: Router
  ) { 
    this.suscripcionCurso = this.cursoService.obtenerCurso().subscribe((cursos) => {
      this.dataSource = new MatTableDataSource(cursos);
    })
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.suscripcionCurso.unsubscribe();
  }

  eliminar(id:string){
    this.cursoService.eliminarCurso(id).subscribe((curso:Curso) =>{
      alert(`${curso.id} - ${curso.curso} eliminado satisfactoriamente`);
      this.ngOnInit();
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
        alert(`${elemento.id}-${elemento.curso} fue editado satisfactoriamente`);
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
        // const item = this.dataSource.data.find(curso => curso.id === resultado.id);
        // const index = this.dataSource.data.indexOf(item!);
        // this.dataSource.data.push(resultado);
        // this.tabla.renderRows();
        
      }
    })
  }

}
