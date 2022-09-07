import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('Pruebas unitarias para LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, RouterModule,RouterTestingModule],
      declarations: [ LoginComponent ],
      providers:[AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene invalido cuando ingreso un solo campo', () => {
    const formulario = component.formulario;
    const usuario = formulario.controls['usuario'];
    const contrasenia = formulario.controls['contrasenia'];
    usuario.setValue('Kacie.Braun');
    expect(formulario.invalid).toBeTrue();

  })
  it('El formulario se cambia a valido cuando ingreso los campos requeridos', () => {
    const formulario = component.formulario;
    const usuario = formulario.controls['usuario'];
    const contrasenia = formulario.controls['contrasenia'];
    usuario.setValue('Kacie.Braun');
    contrasenia.setValue('rN1rdJkNuj4zqVN');
    expect(formulario.invalid).toBeFalse();
  })
});
