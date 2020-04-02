import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax-getJSON',
  templateUrl: './AjaxGetJSON.component.html',
  styleUrls: ['./AjaxGetJSON.component.scss']
})
export class AjaxGetJSONComponent {

  constructor(){
    const url = 'https://httpbin.org/delay/1';

    /* 
      A diferencia de ajax, utilizar su propiedad getJSON nos ayudara a realizar un peticion http de una manera mas eficiente y mas personalizada,
      esta propiead recibe dos parametros, la url a la cual hara la peticion y un segundo parametro opcional, que es un objeto con los headers de la peticion.
      Otra gran diferencia es que la propiedad getJSON retornara inmediatamente el JSON principal de la peticion.
    */
    const data$ = ajax.getJSON( url, {
      'Content-Type': 'application/json',
      'token': 'MyOwnToken123'
    }).subscribe({
      next: resp => console.log('next:', resp),
      error: err => console.warn('erroe in:', err),
      complete: () => console.log('Complete')
    })

    const dataAjax$ = ajax({
      url: url,
      method: 'PUT | POST | GET | DELETE',
      headers: {
        'Content-Type': 'application/json',
        'token': 'MyOwnToken123' 
      },
      body: {
        id: 1,
        name: 'Juanes'
      }
    })

    const requestPost = ajax.post(url, {id: 2, name: 'juanes'}, {'content-type': 'application/json'})
    const requestGet = ajax.get(url, {'content-tpye': 'appliaction/json'});
    const requestDelete = ajax.delete(url, {'content-type': 'application/json'});
    const requestPut = ajax.put(url, {body: 'some'}, {'headers': 'Melo'})
  }

}
