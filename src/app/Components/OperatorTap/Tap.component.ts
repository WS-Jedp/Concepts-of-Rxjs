import { Component } from '@angular/core';
import { range, asyncScheduler } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-operator-tap',
  templateUrl: './Tap.component.html',
  styleUrls: ['./Tap.component.scss']
})
export class TapOperatorComponent{

  cosntructor(){

    const obs$ = range(1,10, asyncScheduler);


    // El operator Tap se suele usar mucho mas para "debugear" la operacion donde esta, permitiendo conocer el estado de la subscripcion en todo momento.
    // Tambien se suele usar mucho para realizar efectos secundarios segun el estado de la subscripcion, 
    // Este operador destaca por ignorar el return que especifica dentro de el
    const subs = obs$.pipe(
      tap({
        next: val => console.log(val),
        complete: () => console.log('Completado')
      })
    ).subscribe(resp => console.log(resp))

    obs$.subscribe(resp => console.log(resp))
  }

}