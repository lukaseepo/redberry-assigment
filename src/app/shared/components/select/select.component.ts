import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() control: string;
  @Input() items:any;
  @Input() label:string;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
