import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { usuarios } from './interfaces';
//import { url } from 'inspector';
import { Observable } from 'rxjs';

const urlApi =environment.url;
@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  http = inject(HttpClient)
  constructor() { }

  getUsuarios(): Observable<usuarios[]>{
    console.info("Esto tiene url", urlApi)
    return this.http.get<usuarios[]>(urlApi)
  }
  getUsuario(id:number):Observable<usuarios[]>{
    return this.http.get<usuarios[]>(`${urlApi}?id=${id}`)
  }

}
