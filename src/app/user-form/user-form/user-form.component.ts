import { LaptopFormGuard } from './../../laptop-form/guards/laptop-form.guard';
import { ActivatedRoute, Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormService} from "../services/form.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ValidateEmail} from "../validators/validator";
import { HttpClient } from '@angular/common/http';
import { LaptopService } from 'src/app/laptop-form/services/laptop.service';

@Component({
  selector: 'app-information-processing',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})


export class UserFormComponent implements OnInit {
  teams:any = [];
  positions:any = [];
  userForm: FormGroup;
  data = JSON.parse(localStorage.getItem('userObj'));
  isSubmited: boolean = false;
  constructor(private _http: FormService, private router: Router,private guard: LaptopFormGuard) {
    this.userForm = new FormGroup({
        name: new FormControl( localStorage.getItem('userObj') ? this.data.name : '', [Validators.required, Validators.minLength(2), Validators.pattern(/^[ა-ჰ]+$/)]),
        surname: new FormControl(localStorage.getItem('userObj') ? this.data.surname : '',[Validators.required, Validators.minLength(2), Validators.pattern(/^[ა-ჰ]+$/)]),
        team_id: new FormControl(localStorage.getItem('userObj') ? this.data.team_id : '', [Validators.required]),
        position_id: new FormControl(localStorage.getItem('userObj') ? this.data.position_id : '', [Validators.required]),
        email: new FormControl(localStorage.getItem('userObj') ? this.data.email : '', [Validators.required, Validators.email, ValidateEmail]),
        phone_number: new FormControl(localStorage.getItem('userObj') ? this.data.phone_number : '', [Validators.required,   Validators.pattern('^((\\+995-?))[0-9]{9}$')]),
     });

     if(localStorage.getItem('userObj') && this.data.team_id !== ''){
      this.getPositions(this.data.team_id);
     }
     
     this.userForm.get('team_id').valueChanges.subscribe((id) => {
      this.getPositions(id);
     })
  }


  ngOnInit(): void {
    localStorage.removeItem('rel');
    this.userForm.valueChanges.subscribe((e) => {
      if(this.userForm.invalid){
        localStorage.removeItem('savedData');
      }else{
        localStorage.setItem('savedData', `${JSON.stringify(this.userForm.value)}`);
      }
      localStorage.setItem('userObj', `${JSON.stringify(e)}`)
    })
    this.getTeams();
  }

  getTeams(){
    this.userForm.get('position_id').disable();
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


  toLaptopFormPage(){
    if(this.userForm.invalid){
      this.isSubmited = true;
      scroll(0,0);
      return;
    }
    this.isSubmited = false;
    this.router.navigate(['/','laptop-form'])
  }

}
