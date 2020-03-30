import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.html',
  styleUrls: ['./styles.scss']
})
export class ObserverComponent{

  constructor(){

    // Observer es una interface para resolver subscripciones a observables
    const Observer: Observer<any> = {
      next: resp => console.log('next:', resp),
      error: err => console.log('error:', err),
      complete: () => console.log('complete: Completado')
    };

    // Observable es el metodo para crear un Observable, es decir, un proveedor de informacion
    const obs$ = new Observable<string>( subs => {
      subs.next('Hola')
      subs.next('Mundo')
      subs.next('Hola')
      subs.next('Mundo')
      subs.complete();
      subs.next('Hola')
      subs.next('Mundo')
    });

    // obs$.subscribe( Observer );

    
  }

}