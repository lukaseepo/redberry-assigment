import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  viewProviders: [
    {
        provide: ControlContainer,
        useExisting: FormGroupDirective
    }
  ]
})
export class InputFieldComponent implements OnInit {
  @Input() isSubmited: boolean;
  @Input() hint: string;
  @Input() control: string;
  @Input() controlName: string;
  @Input() patternText:string;
  @Input() invalidMessage:string;
  @Input() top:string = 'false';
  @Input() placeHolder;
  constructor(private parentForm: FormGroupDirective) { }

  ngOnInit(): void {
  }

  getValue(name){
    return this.parentForm.form.get(name);
  }

}
