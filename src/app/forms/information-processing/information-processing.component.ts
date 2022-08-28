import { Component, OnInit } from '@angular/core';
import {FormService} from "../services/form.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ValidateEmail} from "../validators/validator";


@Component({
  selector: 'app-information-processing',
  templateUrl: './information-processing.component.html',
  styleUrls: ['./information-processing.component.scss']
})


export class InformationProcessingComponent implements OnInit {
  teams:any = [];
  positions:any = [];
  userForm: FormGroup;
  data = JSON.parse(localStorage.getItem('obj'));
  constructor(private _http: FormService) {
    this.userForm = new FormGroup({
      name: new FormControl( localStorage.getItem('obj') ? this.data.name : '', [Validators.required, Validators.minLength(2), Validators.pattern(/^[ა-ჰ]+$/)]),
      surname: new FormControl(localStorage.getItem('obj') ? this.data.surname : '',[Validators.required, Validators.minLength(2), Validators.pattern(/^[ა-ჰ]+$/)]),
      team_id: new FormControl(localStorage.getItem('obj') ? this.data.team_id : '', [Validators.required]),
      position_id: new FormControl(localStorage.getItem('obj') ? this.data.position_id : '', [Validators.required]),
      email: new FormControl(localStorage.getItem('obj') ? this.data.email : '', [Validators.required, Validators.email, ValidateEmail]),
      phone_number: new FormControl(localStorage.getItem('obj') ? this.data.phone_number : '', [Validators.required,   Validators.pattern('^((\\+995-?))?[0-9]{9}$')])
    });

    if(localStorage.getItem('obj') && this.data.team_id !== ''){
      this.getPositions(this.data.team_id);
    }else {
      this.userForm.get('position_id').disable();
      this.userForm.get('team_id').valueChanges.subscribe((id) => {
        this.userForm.get('position_id').enable();
        this.getPositions(id);
      })
    }
  }

  ngOnInit(): void {
    this.userForm.valueChanges.subscribe((e) => {
      localStorage.setItem('obj', `${JSON.stringify(e)}`)
    })
    this.getTeams();
  }

  getTeams(){
    this._http.getTeams().subscribe((teams) => {
      this.teams = teams;
    })
  }

  getPositions(id){
    this._http.getPositions().subscribe((positions) => {
      this.positions = positions;
      this.positions.data = this.positions.data.filter((e) => e.team_id === id);
      this.userForm.get('position_id').enable();
    })
  }


}
