import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  
})
export class InputFieldComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() isSubmited: boolean;
  @Input() hint: string;
  @Input() control: string;
  @Input() controlName: string;
  @Input() patternText:string;
  @Input() invalidMessage:string;
  @Input() top:string = 'false';
  @Input() placeHolder;
  constructor() { }

  ngOnInit(): void {
  }

  getValue(name){
    return this.form.get(name);
  }

}
