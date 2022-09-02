import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/modelo/curso';





@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Curso
  ) { 
    this.formulario = fb.group({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      curso: new FormControl(''),
      cedula: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  actualizar(){
    this.dialogRef.close(this.formulario.value)
  }

  cerrar(){
    this.dialogRef.close();
  }
}
