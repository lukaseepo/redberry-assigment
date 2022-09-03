import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataListService {

  constructor(private http: HttpClient) { }

  getAllLaptops(){
    return this.http.get(`${environment.apiKey}laptops?token=576491d0d598ec6839fddb19fd22c163`);
  }

}
