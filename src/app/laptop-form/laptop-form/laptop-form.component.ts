import { LaptopFormGuard } from './../guards/laptop-form.guard';
import { LaptopService } from './../services/laptop.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptop-form',
  templateUrl: './laptop-form.component.html',
  styleUrls: ['./laptop-form.component.scss']
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
      laptop_purchase_date:   new FormControl(localStorage.getItem('laptopForm') ? this.data.laptop_purchase_date : '', [Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')]),
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
    this.formData.append('name', this.userData.name)
    this.formData.append('surname', this.userData.surname)
    this.formData.append('email', this.userData.email)
    this.formData.append('position_id', this.userData.position_id)
    this.formData.append('team_id', this.userData.team_id,)
    this.formData.append('phone_number', this.userData.phone_number)
    this.formData.append('laptop_image', this.imgFile[0])
    this.formData.append('laptop_name', this.laptopForm.get('laptop_name').value)
    this.formData.append('laptop_brand_id',this.laptopForm.get('laptop_brand_id').value)
    this.formData.append('laptop_cpu',this.laptopForm.get('laptop_cpu').value)
    this.formData.append('laptop_cpu_cores',this.laptopForm.get('laptop_cpu_cores').value)
    this.formData.append('laptop_cpu_threads',this.laptopForm.get('laptop_cpu_threads').value)
    this.formData.append('laptop_ram',this.laptopForm.get('laptop_ram').value)
    this.formData.append('laptop_hard_drive_type',this.laptopForm.get('laptop_hard_drive_type').value)
    this.formData.append('laptop_purchase_date',this.laptopForm.get('laptop_purchase_date').value)
    this.formData.append('laptop_state',this.laptopForm.get('laptop_state').value)
    this.formData.append('laptop_price',this.laptopForm.get('laptop_price').value)
    this.formData.append('token','576491d0d598ec6839fddb19fd22c163')

    this.isSubmited = false;
    this.http.postUserInfo(this.formData).subscribe((res) => {
      console.log(res);
      this.showPopUp = true;
      localStorage.clear();
      localStorage.setItem('rel', 'true')
    });
  }


}
