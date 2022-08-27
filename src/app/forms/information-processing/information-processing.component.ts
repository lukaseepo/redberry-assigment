import { Component, OnInit } from '@angular/core';
import {FormService} from "../services/form.service";

@Component({
  selector: 'app-information-processing',
  templateUrl: './information-processing.component.html',
  styleUrls: ['./information-processing.component.scss']
})
export class InformationProcessingComponent implements OnInit {
  teams:any = [];
  positions:any = [];
  id:number;
  constructor(private _http: FormService) { }

  ngOnInit(): void {
    this.getTeams();
    this.getPositions();
  }

  ngOnChanges():void{
    console.log(this.id);
  }

  getTeams(){
    this._http.getTeams().subscribe((teams) => {
      this.teams = teams;
      console.log(teams);
    })
  }

  getPositions(){
    this._http.getPositions().subscribe((positions) => {
      this.positions = positions;
      this.positions.data = this.positions.data.filter((e) => e.teams_id === this.id);
      console.log(positions);
    })
  }


}
