import { Component  } from '@angular/core';
import { from, of } from 'rxjs'; 

@Component({
  selector: 'app-from-and-of',
  templateUrl: './FromAndOf.component.html',
  styleUrls: ['./FromAndOf.component.scss']
})
export class FromAndOfComponent{

  constructor(){

    const observer = {
      next: val => console.log('next:', val),
      complete: () => console.log('Finish')
    }

    // El from crea un observable capaz de guardar informacion de forma individual por cada elemento que reciba
    const subs$ = from([{name: 'juan'}, {name:'esteban'}]);
    const subs2$ = of([1,2,3,4,5, {name: 'juan'}], [1,2,3,4,5, {name: 'juan'}]);
    const subs3$ = from([1,2,3,4, {name: 'juan'}]);

    // Con From podemos realizar peticiones pero con las ventajas de un subscriptor incluido
    const subs4$ = from( fetch('https://api.github.com/users/WS-Jedp') );
    
    // const names = subs$.subscribe( observer );
    // const numbersOf = subs2$.subscribe( observer );
    // const numbersfrom = subs3$.subscribe( observer );
    // const apiGet = subs4$.subscribe( async (resp) => {
    //   const data = await resp.json();
    //   console.log(data);
    // } );
    
  }
}