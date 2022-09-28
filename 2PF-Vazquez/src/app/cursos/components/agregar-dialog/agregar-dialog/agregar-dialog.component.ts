import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/modelo/curso';

import { CursosService } from '../../../../core/services/cursos.service';
import { CursoState } from '../../../state/cursos.reducer';
import { cargarCursos } from '../../../state/cursos.actions';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-agregar-dialog',
  templateUrl: './agregar-dialog.component.html',
  styleUrls: ['./agregar-dialog.component.css']
})
export class AgregarDialogComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AgregarDialogComponent>,
    private cursosService: CursosService,
    private store: Store<CursoState>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data:Curso
  ) { 
    this.formulario = this.fb.group({
      id: new FormControl('',[Validators.required]),
      curso: new FormControl('',[Validators.required]),
      salon: new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  agregar(){
    const curso: Curso = {
      id: this.formulario.value.id,
      curso: this.formulario.value.curso,
      salon: this.formulario.value.salon,
    }
    this.dialogRef.close(this.formulario.value);
    this.cursosService.nuevoCurso(curso).subscribe((curso) =>{
      this.store.dispatch(cargarCursos())
      this.snackBar.open(`${curso.curso} fue agregado correctamente`, 'Ok', {duration: 3000});
    }
    
    )
  }
}
