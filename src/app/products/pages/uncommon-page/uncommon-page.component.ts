import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Matias'
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
      male: 'invitarlo',
      female: 'invitarla'
  }

  changeClient(): void {
      this.name = 'Melissa';
      this.gender = 'female';
  }

   //i18nPlural
   public clients: string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];
   public clientsMap = {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      'other': 'tenemos # clientes esperando.',
   }

   deleteClient(): void {
    this.clients.shift();
   }

    //KeyValue Pipe
    public person = {
      name: 'Matias',
      age: 34,
      address: 'Ottawa, Canada'

    }

  //Async Pipe
  //cada 2 seg quiero que emita el siguiente valor
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log(value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })


   }
