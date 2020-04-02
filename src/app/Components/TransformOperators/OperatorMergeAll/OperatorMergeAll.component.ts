import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { pluck, debounceTime, map, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-all',
  templateUrl: './OperatorMergeAll.component.html',
  styleUrls: ['./OperatorMergeAll.component.scss']
})
export class OperatorMergeAllComponent{

  /*
    En algunas ocasiones nosotros deberemos tener un observador que devolvera un observador.
    Como un observable de un input, que el valor de este haga una peticion http ajax.
    Cuando esto sucede tendremos que suscribirnos dos veces en la misma operacion, lo cual puede ser complicado de leer.
    Para eso podemos utilizar operadores que trasnforman la informacion, que se encargan de suscribirnos por nosotros, para que solo tengamos que realizar una sola suscripcion en toda la operacion.
    Haciendo nuestro codigo mas legible.  
  */
  constructor(){

    //  url = 'https://api.github.com/search/users?q='
    const input$ = fromEvent<KeyboardEvent>(document, 'keyup');
    
    const data = input$.pipe(
      debounceTime(500),
      pluck('target', 'value'),

      // Aqui vemos como dentro de un observable se ejecuta otro, al cual debemos suscribir para obtener su respuesta
      map(resp => ajax.getJSON(`https://api.github.com/search/users?q=${resp}`)),

      // El mergeAll se suscribira al observable anterior de manera automatica, y no se terminara hasta que todas las emisiones del observable anterior lleguen al complete 
      mergeAll()

    )
    // Como resultado solo tenemos que tener un subscribe al final de toda la operacion
    .subscribe( console.log )

    // mergeMap, el mergeMap es un operador que recibe un callback que retorne un observable
    // switchMap, funciona de la misma forma que el mergeMap, la diferencia es que en caso de que el observable emita muchos datos, el switchMap solo aceptara la ultima emision que ocurra en el observable 
    // concatMap, funciona de manera similar al mergeMap, la diferencia es que en caso de que hayan varias subscripciones en el mismo observador, el concatMap se encargara de emitir todos los valores, pero de forma sincrona, es decir, que no emitira un valor hasta que el primero se complete y asi sucesivamente, manteniendo un orden, concatenando las emisiones de cada observable.
    // exhaustMap, al igual que los demas, recibe un observador para suscribirse, la diferencia es que solo se suscribira a un observable y no se volvera a suscribir a otro hasta que el primer observable acabe y asi sucesivamente
    
    
  }

}
