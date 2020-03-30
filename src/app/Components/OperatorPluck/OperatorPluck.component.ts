import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-operator-pluck',
  templateUrl: './OperatorPluck.component.html',
  styleUrls: ['./OperatorPluck.component.scss']
})
export class OperatorPluckComponent{

  constructor(){

    const obs$ = fromEvent<Event>(window, 'scroll');

  // El pluck es operador que nos permite traer un atributo especifico de un objeto
    // const subs = obs$.pipe(
    //   pluck('path')
    // ).subscribe(console.log)

    // Con pluck podemos ingresar a los atributos de los atributos de un objeto separandolos en orden y con coma ","
    // const subs2 = obs$.pipe(
    //   pluck('srcElement', 'location', 'origin')
    // ).subscribe(console.log)

  }
}