import { Component } from '@angular/core';
import { fromEvent, from, of, asyncScheduler, interval } from 'rxjs';
import { debounceTime, pluck, throttleTime, distinct, sampleTime, sample, auditTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './DebounceTime.component.html',
  styleUrls: ['./DebounceTime.component.scss']
})
export class DebounceTimeComponent{

  constructor(){

      const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

      // El operador debounceTime nos ayuda a controlar el numero de emisiones de un observable, en algunas ocasiones un observables emitiran demasiados datos, con debounceTime controlamos en cuanto tiempo se mostrara ultima emision del observable
      const subsKeyup = keyup$.pipe(
        debounceTime(2000),
      ).subscribe({next: val => console.log('debounceTime:', val)})

      /*
        El throttleTime se encarga de controlar tambien la cantidad de emisiones de un observable
        El throttleTime retornara una emision cada x tiempo especificado como parametro
      */
      const subsThrottleTime = keyup$.pipe(
        throttleTime(4000, asyncScheduler, {
          leading: false,
          trailing: true
        })
      ).subscribe({next: val => console.log('throttleTime:', val)})

      // El sampleTime tambien controla cantidad de emisiones de un observable con el tiempo, este retornara la ultima emision de un observador cada x tiempo que le establescamos.
      const subsSampleTime = keyup$.pipe(
        sampleTime(1000)
      ).subscribe({next: val => console.log('next sampleTime:', val)})


      const interval$ = interval(500);
        
      // El sample funciona dejando pasar la ultima emision del observable al que nos suscribimos, sin embargo, solo lo dejara emitir cuando el observable que recibe el sample emita un valor
      const subsSample = interval$.pipe(
        sample(keyup$)
      ).subscribe({next: val => console.log('next:', val)});


      // El auditTime dejara pasar la ultima emision de un observable que se realice en el lapso de tiempo que le especificamos una vez ya pasado este mismo tiempo 
      const subsAuditTime = keyup$.pipe(
        auditTime(2000)
      ).subscribe({next: val => console.log('next:', val)});

  }


}