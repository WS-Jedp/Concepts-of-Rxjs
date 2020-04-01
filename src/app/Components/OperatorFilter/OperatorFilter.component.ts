import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-operator-filter',
  templateUrl: './OperatorFilter.component.html',
  styleUrls: ['./OperatorFilter.component.scss']
})
export class OperatorFilterComponent{

  constructor(){
    const masters = [
      {
        type: 'All-star',
        name: 'Elon Musk'
      },
      {
        type: 'All-star',
        name: 'Leonardo Da Vinci'
      },
      {
        type: 'Scientific',
        name: 'Albert Einstein'
      },
      {
        type: 'Music',
        name: 'Wolfgang Mozart'
      },
    ]

    const obsMasters$ = from(masters);

    // El operator filter nos permite crear un filtro de la informacion recibida para que retorne la informacion que cumpla la condicion del filter
    const subs = obsMasters$.pipe(
      filter( (master) => master.type === 'All-star' ),
      pluck('name')
    ).subscribe(resp => {
      console.log('resp:', resp)
    })

  }
}