import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldOptionComponent } from './input-field-option.component';

describe('InputFieldOptionComponent', () => {
  let component: InputFieldOptionComponent;
  let fixture: ComponentFixture<InputFieldOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
