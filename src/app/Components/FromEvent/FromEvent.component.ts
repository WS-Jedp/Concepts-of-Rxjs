import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './FromEvent.component.html',
  styleUrls: ['./FromEvent.component.scss']
})
export class FromEventComponent{

  constructor(){
    // FromEvent es un observador de eventos, deberemos siempre tipar el evento que sera observado
    const from = fromEvent<MouseEvent>(document, 'click');

    // const subs = from.subscribe(
    //   resp => {
    //     console.log(resp.clientX)
    //   }
    // )
  }

}