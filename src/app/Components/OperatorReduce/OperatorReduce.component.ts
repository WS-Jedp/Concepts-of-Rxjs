import { Component } from '@angular/core';
import { range } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operator-reduce',
  templateUrl: './OperatorReduce.component.html',
  styleUrls: ['./OperatorReduce.component.scss']
})
export class OperatorReduceComponent{
  constructor(){
    
    const totalReduce = (acc:number, curr:number) => acc + curr;
    
    const arrNumb = [1,2,3,4,5,6];
    console.log('reduce', arrNumb.reduce(totalReduce, 0));
    
    const rng$ = range(1,10);

    // El operador reduce funciona de la misma manera que un reduce de JavaScript, nos permite incializar una cuenta a partir de un arreglo de numeros
    // El operador reduce nos retorna el acumulado total de elmentos
    const subs = rng$.pipe(
      take(5),
      tap(resp => console.log(resp), null, () => console.log('Done!')),
      reduce(totalReduce, 0)
    ).subscribe(resp => console.log(resp))

  }
}