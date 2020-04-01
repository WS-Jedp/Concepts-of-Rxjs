import { Component } from '@angular/core';
import { from, of, fromEvent, interval } from 'rxjs';
import { take, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

@Component({
  selector: 'app-operators-other',
  templateUrl: './OperatorsOthers.component.html',
  styleUrls: ['./OperatorsOthers.component.scss']
})
export class OperatorsOthersComponent{

  constructor(){

    const numbers$ = of<Number>(1,2,3,4,5,6);

    // El operator take nos permite cancelar una subscripcion cuando reciba la cantidad especificada de elementos de un observable.
    // const subs = numbers$.pipe(
    //   take(3)
    // ).subscribe(resp => console.log('Take',resp));

    // El operador first sirve para obtener el primer valor de una subscripcion, se puede crear una condicion como parametro
    // const subsFirst = numbers$.pipe(
    //   first()
    // ).subscribe( resp => {
    //   console.log('first:',resp);
    // })

    // El operator takeWhile retornaara los valores de la subscripcion hasta que se cumpla la conidcion especificada, el segundo parametro es si queremos o no ver en que valor se detuvo la subscripción
    // const subsTakeWhile = numbers$.pipe(
    //   takeWhile( val => val < 3, true )
    // ).subscribe({next: val => console.log('TakeWhile',val), complete: () => console.log('Complete')})

    // El takeUntil es un operador que estara suscrito a un observable hasta que se cumpla la funcion de otro observable
    const clickDoc$ = fromEvent(document, 'click');
    // interval(4000).pipe(
    //   takeUntil(  clickDoc$ )
    // ).subscribe({next: val => console.log('next takeUntil:', val), complete: () => console.log('complete')})

    // El skip se encargara de evitar las primeras transmisiones del observable que le especifiquemos como parametro
  //   clickDoc$.pipe(
  //     skip(1)
  //   ).subscribe({next: val => console.log('skip next:', val), complete: () => console.log('complete skip')})

  interface master{
    name: string,
  };
  const arrMasters:master[] = [
    {
      name: 'Elon Musk',
    },
    {
      name: 'Leondardo Da Vinci',
    },
    {
      name: 'Albert Einstein',
    },
    {
      name: 'Nikola Tesla',
    },
    {
      name: 'Nikola Tesla',
    },
    {
      name: 'Nikola Tesla',
    },
    {
      name: 'Albert Einstein',
    },
  ]

  const masters$ = from(arrMasters);

  // El distinc nos sirve para evitar las repeticiones de emisiones de un observable, especificando los parametros que no se deben repetir para emitirse
  const subsDistinct = masters$.pipe<master>(
    distinct( m => m.name)
  )

  // El distinc retornara el valor que no sea igual al valor anterior  
  const subsDistinctUntilChange = masters$.pipe(
    distinctUntilChanged( (ant, act) => ant.name === act.name)
  ).subscribe({next: val => console.log('resp untilChanged:', val)})
  
  const subsDistinctUntilKeyChanged = masters$.pipe(
    distinctUntilKeyChanged('name')
  ).subscribe({next: val => console.log('next untilKeyChanged:', val)})
  

  }

    

}