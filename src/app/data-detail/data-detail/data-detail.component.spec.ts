import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDetailComponent } from './data-detail.component';

describe('DataDetailComponent', () => {
  let component: DataDetailComponent;
  let fixture: ComponentFixture<DataDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
