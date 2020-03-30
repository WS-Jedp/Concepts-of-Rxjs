import { Component } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './Subject.component.html',
  styleUrls: ['./Subject.component.scss']
})
export class SubjectComponent{

  constructor(){

    const Observer: Observer<any> = {
      next: resp => console.log('next:', resp),
      error: err => console.log('error:', err),
      complete: () => console.log('complete: Completado')
    };

    const Interval$ = new Observable(subs => {

      let Interval = setInterval(() => {
        subs.next(Math.random())
      }, 4000)



      // El return se ejecuta cada vez que el subscriptor se desuscribe del observador.
      return () => { 
        clearInterval(Interval)
        console.log('Interval destroyed');
      };
    })

    /* 
      El subject principalmente puede funcionar como un Observable, la diferencia es que este:
          1- Casteo Multiple => Puede recibir varios suscriptores al mismo tiempo y a la misma subscripcion, ofreciendo la misma informacion a todos los suscriptores 
          2- Funciona como Observer => Un Observable normal puede recibir como parametro un Subject, para transformar este Observable en el Subject
          3- Next, Error y complete => Al igual que un Observable puede recibir un Next, Error y complete
    */

    const Subject$ = new Subject(); 
    // Subject como Observer, transforma el Observable original en un Subject y lo guarda en su memoria
    const subscription = Interval$.subscribe(Subject$);

    // Puede recibir varios suscirptores al mismo tiempo y entregarles la misma informacion a cada suscriptor
    const subs1 = Subject$.subscribe(resp => console.log('subs1:', resp));

    // Al utilizar un Observer creado en un Subject este Subject adaptara la caracteristicas del Observer creado
    const subs2 = Subject$.subscribe(Observer);

    // El Subject cuenta con los metoodos Next, Error y Complete, los cuales podemos invocar desde afuera del observador mismo.
    /*
      Acá nace el concepto de Hot Observable y Cold Observable, 
      Se conoce Hot Observable cuando podemos enviar datos al observador desde fuera de este mismo,
      Mientras que se conoce Cold Observable a los observadores que solo pueden registrar datos desde el mismo observador
    */ 
    setTimeout(()=>{
      Subject$.next(10);
      subscription.unsubscribe();
    }, 5000)
  }


}