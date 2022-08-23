import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePersonalizado'
})
export class PipePersonalizadoPipe implements PipeTransform {

  transform(value: any): string {
    return value.nombre+ ' ' +value.apellido;
  }

}
