import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  viewProviders: [
    {
        provide: ControlContainer,
        useExisting: FormGroupDirective
    }
  ]
})
export class SelectComponent implements OnInit {
  @Input() control: string;
  @Input() items:any;
  @Input() label:string;
  constructor(private parentForm: FormGroupDirective) { }

  ngOnInit(): void {
  }

}
