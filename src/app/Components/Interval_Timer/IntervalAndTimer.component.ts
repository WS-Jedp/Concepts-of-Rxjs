import { Component } from '@angular/core';
import { interval, timer, Observer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './IntervalAndTimer.component.html',
  styleUrls: ['./IntervalAndTimer.component.scss']
})
export class IntervalAndTimer{

  constructor(){

    const Observer:Observer<any> = {
      next: val => console.log('val:', val),
      error: err => console.error(err), 
      complete: () => console.log('Finish')
    }

    const today = new Date();
    today.setSeconds(today.getSeconds()+5)

// interval es un observable que retorna un numero cada X tiempo, el cual le especificamos como parametro
    const interval$ = interval(2000);

// timer es una observalble parecido a Interval, la diferencia es cuando depende de los parametros que le enviemos
/*
    - Si enviamos un solo parametro, sera un observable que se ejecute y complete pasado el tiempo especificado
    - Si enviamos dos parametros, conseguiremos un efecto parecido al interval, se ejecutara en el tiempo establecido en el primer parametro y la secuencia sera ejecutada cada X tiempo especificado como segundo parametro
    - Por ultimo, el Timer puede recibir como parametro una fecha en especifiico, por lo cual se ejecutra el timer cuando se cumpla esa fecha.
*/
    // const timer$ = timer(2000);
    // const timer2$ = timer(2000, 1000);
    const timer3$ = timer(today);


    // const subs1 = interval$.subscribe(Observer);
    // const subs2 = timer$.subscribe(Observer);
    // const subs3 = timer3$.subscribe(Observer);
  }
}