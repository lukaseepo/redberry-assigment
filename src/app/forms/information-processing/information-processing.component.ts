import {Component, OnInit} from '@angular/core';
import {FormService} from "../services/form.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ValidateEmail} from "../validators/validator";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-information-processing',
  templateUrl: './information-processing.component.html',
  styleUrls: ['./information-processing.component.scss']
})


export class InformationProcessingComponent implements OnInit {
  teams:any = [];
  positions:any = [];
  brands:any = [];
  cpus:any = [];
  userForm: FormGroup;
  data = JSON.parse(localStorage.getItem('obj'));
  firstForm: boolean = true;
  secondForm: boolean = false;
  isSubmited: boolean = false;
  imgFile;
  uploaded: boolean = false;
  files = [];
  math = Math;
  formData: FormData = new FormData()
  constructor(private _http: FormService, private http: HttpClient) {
    this.userForm = new FormGroup({
      userGroup: new FormGroup({
        name: new FormControl( localStorage.getItem('obj') ? this.data.name : '', [Validators.required, Validators.minLength(2), Validators.pattern(/^[ა-ჰ]+$/)]),
        surname: new FormControl(localStorage.getItem('obj') ? this.data.surname : '',[Validators.required, Validators.minLength(2), Validators.pattern(/^[ა-ჰ]+$/)]),
        team_id: new FormControl(localStorage.getItem('obj') ? this.data.team_id : '', [Validators.required]),
        position_id: new FormControl(localStorage.getItem('obj') ? this.data.position_id : '', [Validators.required]),
        email: new FormControl(localStorage.getItem('obj') ? this.data.email : '', [Validators.required, Validators.email, ValidateEmail]),
        phone_number: new FormControl(localStorage.getItem('obj') ? this.data.phone_number : '', [Validators.required,   Validators.pattern('^((\\+995-?))?[0-9]{9}$')]),
      }),
      laptop_name: new FormControl(localStorage.getItem('obj') ? this.data.laptop_name : '', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+]+$/)]),
      laptop_brand_id: new FormControl(localStorage.getItem('obj') ? this.data.laptop_brand_id : '', [Validators.required]),
      laptop_cpu: new FormControl(localStorage.getItem('obj') ? this.data.laptop_cpu : '', [Validators.required]),
      laptop_cpu_cores: new FormControl(localStorage.getItem('obj') ? this.data.laptop_cpu_cores : '', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]),
      laptop_cpu_threads: new FormControl(localStorage.getItem('obj') ? this.data.laptop_cpu_threads : '', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]),
      laptop_ram: new FormControl(localStorage.getItem('obj') ? this.data.laptop_ram : '', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]),
      laptop_hard_drive_type:   new FormControl(localStorage.getItem('obj') ? this.data.laptop_hard_drive_type : '', [Validators.required]),
      laptop_price:   new FormControl(localStorage.getItem('obj') ? this.data.laptop_price : '', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]),
      laptop_purchase_date:   new FormControl(localStorage.getItem('obj') ? this.data.laptop_purchase_date : '', [Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')]),
      laptop_state: new FormControl(localStorage.getItem('obj') ? this.data.laptop_state : '', [Validators.required])
    });
   

    if(localStorage.getItem('obj') && this.data.team_id !== ''){
      this.getPositions(this.data.team_id);
      this.userForm.get('userGroup').get('team_id').valueChanges.subscribe((id) => {
        this.userForm.get('userGroup').get('position_id').enable();
        this.getPositions(id);
      })
    }else {
      this.userForm.get('userGroup').get('position_id').disable();
      this.userForm.get('userGroup').get('team_id').valueChanges.subscribe((id) => {
        this.userForm.get('userGroup').get('position_id').enable();
        this.getPositions(id);
      })
    }
  }


  ngOnInit(): void {
    if(sessionStorage.getItem('rel')){
      const lines = document.querySelectorAll('.line');
      lines[0].classList.remove('active');
      lines[1].classList.add('active');
      this.firstForm = false;
      this.secondForm = true;
    }
    this.userForm.valueChanges.subscribe((e) => {
      localStorage.setItem('obj', `${JSON.stringify({
        'name': e.userGroup.name,
        'surname': e.userGroup.surname,
        'team_id': e.userGroup.team_id,
        'position_id': e.userGroup.position_id,
        'email': e.userGroup.email,
        'phone_number': e.userGroup.phone_number,
        'laptop_name': e.laptop_name,
        'laptop_brand_id': e.laptop_brand_id,
        'laptop_cpu': e.laptop_cpu,
        'laptop_cpu_cores':e.laptop_cpu_cores,
        'laptop_cpu_threads': e.laptop_cpu_threads,
        'laptop_hard_drive_type': e.laptop_hard_drive_type,
        'laptop_ram': e.laptop_ram,
        'laptop_price': e.laptop_price,
        'laptop_purchase_date': e.laptop_purchase_date,
        'laptop_state': e.laptop_state,
      })}`)
    })
    this.getTeams();
    this.getBrands();
    this.getCpus()
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
      this.userForm.get('userGroup').get('position_id').enable();
    })
  }

  activateFormsLocalStorage(index: number){
    const lines = document.querySelectorAll('.line');
    if(index === 0){
      sessionStorage.removeItem('rel');
      lines[index].classList.add('active')
      lines[index + 1].classList.remove('active');
      this.firstForm = true;
      this.secondForm = false;
      this.isSubmited = false;
      return;
    }
    this.isSubmited = false;
    sessionStorage.setItem('rel', 'true');
    this.secondForm = true;
    this.firstForm = false;
    lines[index - 1].classList.remove('active')
    lines[index].classList.add('active');
  }

  activateForms(index:number){
    const lines = document.querySelectorAll('.line');
    if(this.userForm.get('userGroup').invalid){
      this.isSubmited = true;
      scroll(0,0);
      return;
    }
    this.isSubmited = false;
    if(index === 0){
      this.firstForm = false;
      this.secondForm = true;
      lines[0].classList.remove('active');
      lines[1].classList.add('active');
      sessionStorage.setItem('rel', 'true');
      scroll(0,0)
    }else{
      this.firstForm = true;
      this.secondForm = false;
      lines[0].classList.add('active');
      lines[1].classList.remove('active');
      sessionStorage.removeItem('rel');
      scroll(0,0)
    }
  }


  getBrands(){
    this._http.getBrands().subscribe((brands) => {
      this.brands =  brands;
    })
  }

  getCpus(){
    this._http.getCpus().subscribe((cpus) => {
      this.cpus = cpus;
    })
  }

  onSubmit(){
    if(this.userForm.invalid || this.userForm.get('userGroup').invalid){
      this.isSubmited = true;
      scroll(0,0)
      return;
    }
  
    this.formData.append('name', this.userForm.get('userGroup').get('name').value);
    this.formData.append('surname', this.userForm.get('userGroup').get('surname').value);
    this.formData.append('position_id', this.userForm.get('userGroup').get('position_id').value);
    this.formData.append('team_id', this.userForm.get('userGroup').get('team_id').value);
    this.formData.append('email', this.userForm.get('userGroup').get('email').value);
    this.formData.append('phone_number', this.userForm.get('userGroup').get('phone_number').value);
    this.formData.append('laptop_image', this.imgFile[0], this.imgFile[0].name);
    this.formData.append('laptop_name', this.userForm.get('laptop_name').value);
    this.formData.append('laptop_brand_id', this.userForm.get('laptop_brand_id').value);
    this.formData.append('laptop_cpu', this.userForm.get('laptop_cpu').value);
    this.formData.append('laptop_cpu_cores', this.userForm.get('laptop_cpu_cores').value);
    this.formData.append('laptop_cpu_threads', this.userForm.get('laptop_cpu_threads').value);
    this.formData.append('laptop_hard_drive_type', this.userForm.get('laptop_hard_drive_type').value);
    this.formData.append('laptop_state', this.userForm.get('laptop_state').value);
    this.formData.append('laptop_purchase_date', this.userForm.get('laptop_purchase_date').value);
    this.formData.append('laptop_ram', this.userForm.get('laptop_ram').value);
    this.formData.append('laptop_price', this.userForm.get('laptop_price').value);
    this.formData.append('token', '576491d0d598ec6839fddb19fd22c163');
    this.isSubmited = false;
    this._http.postUserInfo(this.formData).subscribe((data) => {
      localStorage.clear();
      console.log(data);
    })
  }

  onSelect(event) {
    this.files.splice(0,1);
    this.files.push(...event.addedFiles);
    this.imgFile = event.addedFiles;
    this.uploaded = true;
  }
}
