import { createReducer, on } from '@ngrx/store';
import { UsuarioState } from '../../modelo/usuario.state.model';
import { cerrarSesion, crearSesion } from '../actions/usuario.action';
import { Sesion } from '../../modelo/sesion';
import * as UsuarioActions from '../actions/usuario.action'
 
export const estadoInicial: UsuarioState = {
    sesionActiva: false,
    usuario: {
        nombreUsuario: '',
        contrasenia: '',
        admin: false,
        id:''
    }
}

export const usuarioReducer = createReducer(
    estadoInicial,
    on(UsuarioActions.crearSesion, (estado, {usuario}) => {
        return {...estado, sesionActiva: true, usuario}
    }),
    on(UsuarioActions.cerrarSesion, (state) => {
        return { ...state, sesionActiva: false, usuarioActivo: undefined }
      })
)