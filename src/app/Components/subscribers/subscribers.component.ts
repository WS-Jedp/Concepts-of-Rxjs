import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent{

  
  constructor(){
    // Observer es una interface para resolver subscripciones a observables
    const Observer: Observer<any> = {
      next: resp => console.log('next:', resp),
      error: err => console.log('error:', err),
      complete: () => console.log('complete: Completado')
    };

    const obs$ = new Observable<number>(subs => {
      
      let count = 0;

      let Interval = setInterval(() => {
        count++;
        subs.next( count )
      }, 1000)

      // El complete no es lo mismo que el Return, el complete siempre se va ejecutar sin reemplazar el valor del return
      setTimeout(()=>{
        subs.complete();
      },3000)

      // El return se ejecuta cada vez que el subscriptor se desuscribe del observador.
      return () => { 
        clearInterval(Interval)
        console.log('Interval destroyed');
      };
    });

    // const subs1 = obs$.subscribe(Observer);
    // const subs2 = obs$.subscribe(Observer);
    // const subs3 = obs$.subscribe(Observer);

    // Usamos add para poder realizar acciones de varias subscripciones al mismo tiempo
    // Con add al momento de desuscribirnos solo habra necesidad de hacerlo con el observador principal 
    // subs1.add(subs2)
    //       .add(subs3)

    // setTimeout(()=>{
    //   subs1.unsubscribe();
    // }, 6000)
  }
}
