import { createAction, props } from "@ngrx/store";
import { Usuario } from '../../modelo/usuario';

export const crearSesion = createAction(
    '[Auth Login] Sesion iniciada',
    props<{usuario: Usuario}>(),
)

export const cerrarSesion = createAction(
    '[Sesion] Cerrar Sesion'
  );