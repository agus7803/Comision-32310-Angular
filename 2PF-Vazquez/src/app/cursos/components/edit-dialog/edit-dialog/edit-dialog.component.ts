import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Curso } from '../../../../modelo/curso';
import { CursosService } from '../../../../core/services/cursos.service';
import { cargarCursos } from '../../../state/cursos.actions';
import { CursoState } from 'src/app/cursos/state/cursos.reducer';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private cursoService: CursosService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    private store: Store<CursoState>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data:Curso
  ) { 
    this.formulario = fb.group({
      curso: new FormControl(''),
      salon: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  actualizar(){
    const c: Curso = {
      id: this.data.id,
      curso: this.formulario.value.curso,
      salon: this.formulario.value.salon,
    }
    this.cursoService.modificarCurso(c).subscribe((curso:Curso) => {
      this.store.dispatch(cargarCursos());
      this.snackBar.open(`${curso.curso} fue editado correctamente`, 'Ok', {duration: 3000});
      this.dialogRef.close(curso);
    });
  }

  cerrar(){
    this.dialogRef.close();
  }
}
