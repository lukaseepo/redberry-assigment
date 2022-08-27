import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  getTeams(){
    return this.http.get('https://pcfy.redberryinternship.ge/api/teams');
  }

  getPositions(){
    return this.http.get('https://pcfy.redberryinternship.ge/api/positions');
  }
}
