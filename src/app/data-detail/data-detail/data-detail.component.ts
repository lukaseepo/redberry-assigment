import { DataDetailService } from './../services/data-detail.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss'],
})
export class DataDetailComponent implements OnInit {
  id: number;
  data: any = [];
  teams: any = [];
  positions: any = [];
  brands: any = [];
  constructor(
    private route: ActivatedRoute,
    private dataDetailService: DataDetailService
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('rel');
    this.id = this.route.snapshot.params['id'];
    this.getDataById();
  }

  getDataById() {
    this.dataDetailService.getDataById(this.id).subscribe((result) => {
      this.data.push(result);
    });
  }

  getTeams(id) {
    this.dataDetailService.getTeams().subscribe((teams) => {
      this.teams.push(teams);
      this.teams[0].data = this.teams[0].data.filter((e) => e.id === id);
    });
  }

  getPositions(team_id, position_id) {
    this.dataDetailService.getPosistions().subscribe((positions) => {
      this.positions.push(positions);
      this.positions[0].data = this.positions[0].data
        .filter((e) => e.team_id === team_id)
        .filter((e) => e.id === position_id);
    });
  }

  getBrands(brand_id) {
    this.dataDetailService.getBrands().subscribe((brands) => {
      this.brands.push(brands);
      this.brands[0].data = this.brands[0].data.filter(
        (e) => e.id === brand_id
      );
    });
  }
}