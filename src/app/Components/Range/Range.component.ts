import { Component } from '@angular/core';
import { range, asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './Range.component.html',
  styleUrls: ['./Range.component.scss']
})
export class RangeComponent{
  constructor(){
    // Range es un observador que contara un serie numerica segun le indiquemos, el primer parametro es desde donce va a empezar a contar, mientras que el segundo son las veces que contara
    // Como tercer parametro puede recibir asynScheduler, el cual sirve para volver funciones sincronas a asincronas
    const rang$ = range(0,10, asyncScheduler);

    // const subs = rang$.subscribe(resp => console.log(resp))
  }
}