import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataDetailService {

  constructor(private http: HttpClient) { }

  getDataById(id:number){
    return this.http.get(`${environment.apiKey}laptop/${id}?token=742a6c57a539e7d55197350ef331f342
    `)
  }

  getTeams(){
    return this.http.get(`${environment.apiKey}teams
    `)
  }

  getPosistions(){
    return this.http.get(`${environment.apiKey}positions`)
  }

  getBrands(){
    return this.http.get(`${environment.apiKey}brands`)
  }
}
