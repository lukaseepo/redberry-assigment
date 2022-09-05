import { DataListService } from './services/data-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent implements OnInit {
  datas:any = [];
  dataExists: boolean = false;
  constructor(private dataListService: DataListService) { }

  ngOnInit(): void {
    localStorage.removeItem('rel');
    this.getAllLaptops();
  }

  getAllLaptops(){
    this.dataListService.getAllLaptops().subscribe((data) => {
      this.datas = data;
      if(this.datas.data.length > 0){
        this.dataExists = true;
      }else{
        this.dataExists = false
      }
    })
  }

}
