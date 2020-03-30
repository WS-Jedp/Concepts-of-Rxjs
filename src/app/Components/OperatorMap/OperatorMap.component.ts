import { Component } from '@angular/core';
import { Subject, range, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-operator-map',
  templateUrl: './OperatorMap.component.html',
  styleUrls: ['./OperatorMap.component.scss']
})
export class OperatorMapComponent{

  // Los operadores son transformadore/manipuladores de la informacion que emite un observable.

  constructor(){
    const obs$ = range(1,10);
    const gitApi$ = from( fetch('https://api.github.com/users/WS-Jedp').then(async (resp) => {
      const dataResp = await resp.json();

      return dataResp;
    }) );

    // Para usar un operador, lo debemos hacer dentro del metodo Pipe
    // Map es un operador que nos permite manipular librementa la informacion que llega y retornar el dato que deseemos

    // obs$.pipe(
    //   map(val => val * 10)
    // ).subscribe( resp => console.log(resp) )

    // const subs = gitApi$.pipe(
    //   map(val => val.login)
    // ).subscribe(name => console.log(name));
  }
}