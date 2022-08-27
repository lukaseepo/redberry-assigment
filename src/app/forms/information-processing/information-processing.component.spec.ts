import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationProcessingComponent } from './information-processing.component';

describe('InformationProcessingComponent', () => {
  let component: InformationProcessingComponent;
  let fixture: ComponentFixture<InformationProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
