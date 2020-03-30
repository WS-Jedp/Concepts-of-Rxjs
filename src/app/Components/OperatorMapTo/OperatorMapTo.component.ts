import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-operator-map-to',
  templateUrl: './OperatorMapTo.component.html',
  styleUrls: ['./OperatorMapTo.component.scss']
})
export class OperatorMapToComponent{

  constructor(){

    const obs$ = fromEvent<KeyboardEvent>(document, 'keyup');

    // El operator mapTo nos permite retornar cualquier valor personalizado que deseemos sin importar la informacion que le haya llegado
    const subs = obs$.pipe(
      mapTo(true)
    ).subscribe(console.log)

  }
}