import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field-option',
  templateUrl: './input-field-option.component.html',
  styleUrls: ['./input-field-option.component.scss'],
  viewProviders: [
    {
        provide: ControlContainer,
        useExisting: FormGroupDirective
    }
  ]
})
export class InputFieldOptionComponent implements OnInit {
  @Input() isSubmited: boolean;
  @Input() control: string;
  @Input() controlName: string;
  @Input() optionOne: string;
  @Input() optionTwo: string;
  constructor(private parentForm: FormGroupDirective) { }

  ngOnInit(): void {
  }

  getValue(name){
    return this.parentForm.form.get(name);
  }

}
