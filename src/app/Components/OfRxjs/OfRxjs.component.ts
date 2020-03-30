import { Component } from '@angular/core';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-OfRxjs',
  templateUrl: './OfRxjs.component.html',
  styleUrls: ['./OfRxjs.component.scss']
})
export class OfRxjsComponent{
  constructor(){
    // El observable Of nos permite crear un Observable de una lista de Elementos
    const ObsOf$ = of<Object>(
      {
        name: 'Juan',
        last_name: 'Esteban'
      },
      {
        name: 'Deossa',
        last_name: 'Pertuz'
      }
    );

    const subs1 = ObsOf$.subscribe(
      resp => console.log('resp',resp),
      null,
      () => console.log('Completado')
    );



    


  }
}