import { Component } from '@angular/core';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-AsyncScheduler',
  templateUrl: './AsyncScheduler.component.html',
  styleUrls: ['./AsyncScheduler.component.scss']
})
export class AsyncSchedulerComponent {

  constructor(){

    const hello = (name) => {
      console.log(`Hello ${name}`)
    }

    /*
      El asyncScheduler es una funcion que nos permite crear una subscripcion, es decir, lo que retorna un subscribe a una promesa.
      El asyncScheduler se puede usar principalmente como un reemplazo de setTimeout y setInterval, pero con las funcionalidades de una subscripcion.

    */

    // asyncScheduler como setTimeout, el primer parametro es la funcion que ejecutara, el segundo el tiempo en que lo ejecutara y el tercero es el parametro que recibe la funcion
    // const subs = asyncScheduler.schedule(hello, 2000, 'Juan')

    // asyncScheduler como setInterval, la diferencia es que la funcion debe ser una funcion declarable, ya que deberemos ejectuar dentro del cuerpo de esta la iteracion que hara, que se indica con this.schedule() y especificar como parametros el nuevo valor del estado
    // const subs2 = asyncScheduler.schedule(function({name, count}){

    //   let counter = count;
    //   this.schedule( {name: 'Esteban', count: counter+1}, 2000  )
    //   console.log(`Hello ${name}${counter}`)

    // }, 2000, {name: 'Juan', count: 0})


    // asyncScheduler como setTimeout
    // asyncScheduler.schedule(() => {
    //   subs.unsubscribe();
    //   subs2.unsubscribe();
    // }, 6000)

  }
}