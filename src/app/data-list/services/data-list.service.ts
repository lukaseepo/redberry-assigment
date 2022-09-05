import {environment} from "../../../environments/environment.prod";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataListService {

  constructor(private http: HttpClient) { }

  getAllLaptops(){
    return this.http.get(`${environment.apiKey}laptops?token=742a6c57a539e7d55197350ef331f342`);
  }

}
