import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment.prod";

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

}

