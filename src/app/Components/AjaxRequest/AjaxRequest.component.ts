import { Component } from '@angular/core';
import { ajax, AjaxError } from 'rxjs/ajax';
import { of, pipe, zip } from 'rxjs';
import { catchError, pluck, switchMap, map } from 'rxjs/operators';


@Component({
  selector: 'app-ajax-request',
  templateUrl: './AjaxRequest.component.html',
  styleUrls: ['./AjaxRequest.component.scss']
})
export class AjaxRequest{

  constructor(){
    
    const url = 'https://api.github.com/users?per_page=5';
    const url2 = 'https://api.github.com/usersxxx?per_page=5';

    const handleErrors = ( resp: AjaxError ) => {
      console.warn('There is an error in:', resp.message);
      return of([]);
    }

    // Ajax nos permite realiza peticiones get a un servidor,
    // El catchError nos sirve para atrapar y emitir cualquier tipo de error que ocurra en la subscripcion
    // El catchError siempre debe retornar un observable, aunque sea uno vacio
    // const data = ajax( url ).pipe(
    //   pluck('response'),
    //   catchError(handleErrors)
    // ).subscribe( console.log );




/**
 * Ejercicio: 
 *  Realizar 2 peticiones HTTP (ajax) una después de otra.
 *  
 *  La primera debe de obtener el personaje de Star Wars:
 *   Luke Skywalker, llamando el endpoint:   /people/1/
 * 
 *  La segunda petición, debe de ser utilizando el objeto
 *  de la petición anterior, y tomar la especie (species),
 *  que es un arreglo de URLs (array), dentro de ese arreglo, 
 *  tomar la primera posición y realizar la llamada a ese URL,
 *  el cual debería de traer información sobre su especie (Human)
 */

// Respuesta esperada:
// Información sobre los humanos en el universo de Star Wars
// Ejemplo de la data esperada
/*
 { name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
*/

// Respuesta esperada con Mayor dificultad
// Retornar el siguiente objeto con la información de ambas peticiones
// Recordando que se disparan una después de la otra, 
// con el URL que viene dentro del arreglo de 'species'

// Tip: investigar sobre la función zip: 
//      Que permite combinar observables en un arreglo de valores
// https://rxjs-dev.firebaseapp.com/api/index/function/zip

// Ejemplo de la data esperada:
/*
    especie: {name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
    personaje: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
*/
    // No tocar ========================================================
    const SW_API = 'https://swapi.co/api';                     
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);
    // ==================================================================

    // Realizar el llamado al URL para obtener a Luke Skywalker
  getRequest(`${SW_API}/people/1`).pipe(

    switchMap( resp => zip(of(resp), getRequest(resp.species[0]) )),
    map( ([person, specie] ) => ({person, specie}) ) 

    ).subscribe( console.log )           // ==
    // =======================================



    
		


  }
}