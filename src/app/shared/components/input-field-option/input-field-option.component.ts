import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field-option',
  templateUrl: './input-field-option.component.html',
  styleUrls: ['./input-field-option.component.scss']
})
export class InputFieldOptionComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() isSubmited: boolean;
  @Input() control: string;
  @Input() controlName: string;
  @Input() optionOne: string;
  @Input() optionTwo: string;
  constructor() { }

  ngOnInit(): void {
  }

  getValue(name){
    return this.form.get(name);
  }

}
