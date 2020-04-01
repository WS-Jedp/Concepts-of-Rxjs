import { Component } from '@angular/core';
import { from } from 'rxjs';
import { scan, map } from 'rxjs/operators';
@Component({
  selector: 'app-operator-scan',
  templateUrl: './OperatorScan.component.html',
  styleUrls: ['./OperatorScan.component.scss']
})
export class OperatorScanComponent{

  constructor(){

    interface Usuario{
      id?: number,
      name?: string,
      email?: string,
      validate?: boolean,
      token?: string,
      age?: number,
    }

    const reduceStateUser = (acc:Usuario, cur: Usuario) => {
      return {...acc, ...cur}
    }

    const stateUser:Usuario[] = [
      {
        id: 1,
        name: 'Juanes',
        email: 'juan@mail.com',
        validate: false,
        token: '',
        age: 19
      },
      {
        id: 1,
        name: 'Juanes',
        email: 'juan@mail.com',
        validate: true,
        token: 'ABC',
        age: 19
      },
      {
        id: 1,
        name: 'Juanes',
        email: 'juan@mail.com',
        validate: true,
        token: 'ABC123',
        age: 19
      },
    ]

// El operador Scan tiene el mismo funcionamiento de Reduce, la diferencia es que el Scan retorna en cada etapa del proceso de la subscripcion el estado en que se encuentra.

    const state$ = from( stateUser ).pipe(
      scan<Usuario>(reduceStateUser, { age: 20 }),
      map( user => user.validate )
    ).subscribe(console.log)


  }
}