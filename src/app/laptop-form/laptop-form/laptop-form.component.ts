import { LaptopFormGuard } from './../guards/laptop-form.guard';
import { LaptopService } from './../services/laptop.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptop-form',
  templateUrl: './laptop-form.component.html',
  styleUrls: ['./laptop-form.component.scss'],
})
export class LaptopFormComponent implements OnInit {
  laptopForm: FormGroup;
  data = JSON.parse(localStorage.getItem('laptopForm'));
  math: Math = Math;
  isSubmited:boolean = false;
  brands: any = [];
  cpus: any = [];
  files = [];
  imgFile;
  showPopUp: boolean = false;
  uploaded: boolean;
  userData = JSON.parse(localStorage.getItem('savedData')); 
  formData: FormData = new FormData();
  constructor(private http: LaptopService, private router: Router, private guard: LaptopFormGuard) {
    this.laptopForm = new FormGroup({
      laptop_name: new FormControl(localStorage.getItem('laptopForm') ? this.data.laptop_name : '', [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+]+$/)]),
      laptop_brand_id: new FormControl(localStorage.getItem('laptopForm') ? this.data.laptop_brand_id : '', [Validators.required]),
      laptop_cpu: new FormControl(localStorage.getItem('laptopForm') ? this.data.laptop_cpu : '', [Validators.required]),
      laptop_cpu_cores: new FormControl(localStorage.getItem('laptopForm') ? this.data.laptop_cpu_cores : '', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]),
      laptop_cpu_threads: new FormControl(localStorage.getItem('laptopForm') ? this.data.laptop_cpu_threads : '', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]),
      laptop_ram: new FormControl(localStorage.getItem('laptopForm') ? this.data.laptop_ram : '', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]),
      laptop_hard_drive_type:   new FormControl(localStorage.getItem('laptopForm') ? this.data.laptop_hard_drive_type : '', [Validators.required]),
      laptop_price:   new FormControl(localStorage.getItem('laptopForm') ? this.data.laptop_price : '', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]),
      laptop_purchase_date:   new FormControl(localStorage.getItem('laptopForm') ? this.data.laptop_purchase_date : '', [Validators.pattern(/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/)]),
      laptop_state: new FormControl(localStorage.getItem('laptopForm') ? this.data.laptop_state : '', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.laptopForm.valueChanges.subscribe((e) => {
      localStorage.setItem('laptopForm', `${JSON.stringify(e)}`)
    })
    this.getBrands();
    this.getCpus();
    if(localStorage.getItem('rel')){
      this.showPopUp = true;
    }
  }


  onSelect(event) {
    let customUploader = document.querySelector('.custom-dropzone');
    this.files.splice(0,1);
    this.files.push(...event.addedFiles);
    this.imgFile = event.addedFiles;
    this.uploaded = true;
    customUploader.classList.add('disable');
  }

  getBrands(){
    this.http.getBrands().subscribe((brands) => {
      this.brands =  brands;
    })
  }

  getCpus(){
    this.http.getCpus().subscribe((cpus) => {
      this.cpus = cpus;
    })
  }

  toUserFormPage(){  
    this.router.navigate(['/', 'user-form']);
  }

  onSubmit(){
    if(this.laptopForm.invalid || this.files.length !== 1 ){
      this.isSubmited = true;
      scroll(0,0)
      return;
    }
    
    for(let key in {...this.userData, ...this.laptopForm.value}){
      this.formData.append(key, {...this.userData, ...this.laptopForm.value}[key]);
    }

    this.formData.append('laptop_image', this.imgFile[0])
    this.formData.append('token','742a6c57a539e7d55197350ef331f342')

    this.isSubmited = false;
    this.http.postUserInfo(this.formData).subscribe((res) => {
      console.log(res);
      this.showPopUp = true;
      localStorage.clear();
      localStorage.setItem('rel', 'true')
    });
  }


}
