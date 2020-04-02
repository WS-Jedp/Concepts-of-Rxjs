import { Component } from '@angular/core';
import { of, interval, concat, merge, combineLatest, forkJoin } from 'rxjs';
import { startWith, endWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-start-with',
  templateUrl: './OperatorStartWith.component.html',
  styleUrls: ['./OperatorStartWith.component.scss']
})
export class OperatorStartWithComponent{
  constructor(){

    // El operador startWhit nos permite emitir un primer dato antes de comenzar a emitir los datos del observable en si, este dato se define en sus parametros
    // El operador endWith se encarga de emitir un ultimo dato despues de que el observable haya emitido ya su ultimo dato
    const nums$ = of(1,2,3).pipe(
      startWith('a','b','c'),
      endWith('x','y', 'z')
    );
    const subsNum = nums$.subscribe(console.log)

    // El operador concat se encarga de controlar el orden de emisiones de los observables, es decir, se encargara emitir primero todas las emisiones del primer observable para despues emitir las del segundo y asi sucesivamente.
    const interval$ = interval(1000);
    const subsConcat = concat(interval$.pipe(take(3)), interval$.pipe(take(2)), nums$)

    // El merge, se encargara de fusionar las emisiones de los observables como uno solo, se llega a completa cuando todos los obseravbles especificados se completen.
    const merge$ = merge(nums$, interval$).subscribe(console.log);

    // El combineLatest se encarga de emitir solo los ultimos datos emitidos por los observables, fusionara el ultimo de el primer observable con el ultimo del segundo o demas observables. 
     const combineLatest$ = combineLatest(nums$, interval$).subscribe(console.log);

    //  El forkJoin, se encargara de emitir los ultimos valores de todos los observables una vez todos estos mismos se hayan completado.
    // Solo los ultimos valores.
     const forkJoin$ = forkJoin(nums$, interval$.pipe(take(5)))
    //  Uno de los usos mas comunes del forkJoin, es la realizacion de varias peticiones a un servidor, trayendo todos los datos al mismo tiempo.
    // Cabe resaltar que si una sola peticion falla, todas las demas tambien lo haran.

  }
}