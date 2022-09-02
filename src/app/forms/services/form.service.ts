import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) {
  }

  getTeams() {
    return this.http.get(`${environment.apiKey}teams`);
  }

  getPositions() {
    return this.http.get(`${environment.apiKey}positions`);
  }

  getBrands(){
    return this.http.get(`${environment.apiKey}brands`);
  }

  getCpus(){
    return this.http.get(`${environment.apiKey}cpus`);
  }

  postUserInfo(userInfo: any){
    const headers = { 'content-type': 'multipart/formdata'}
    const body = userInfo;
    return this.http.post(`${environment.apiKey}laptop/create/`, body);
  }
}

