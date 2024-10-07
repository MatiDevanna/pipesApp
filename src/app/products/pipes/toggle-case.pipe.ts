import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false): string {

    return (toUpper) //si recibi true, entonces lo paso a mayuscula
      ? value.toUpperCase()
      : value.toLocaleLowerCase();


  }
}
