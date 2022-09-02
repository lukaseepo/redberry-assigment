import { TestBed } from '@angular/core/testing';

import { LaptopFormGuard } from './laptop-form.guard';

describe('LaptopFormGuard', () => {
  let guard: LaptopFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LaptopFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
