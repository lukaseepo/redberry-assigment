import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-dropzone',
  templateUrl: './image-dropzone.component.html',
  styleUrls: ['./image-dropzone.component.scss']
})
export class ImageDropzoneComponent implements OnInit {
  @Input() isSubmited: boolean;
  @Input() files;
  @Input() math: Math;
  @Input() uploaded: boolean;
  @Output() onchange =  new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(value){
    this.onchange.emit(value);
  }
}
