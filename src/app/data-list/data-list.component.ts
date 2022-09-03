import { DataListService } from './services/data-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  datas:any = [];
  constructor(private dataListService: DataListService) { }

  ngOnInit(): void {
    this.getAllLaptops();
  }

  getAllLaptops(){
    this.dataListService.getAllLaptops().subscribe((data) => {
      console.log(data);
      this.datas = data;
    })
  }

}
