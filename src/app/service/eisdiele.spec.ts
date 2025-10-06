import { TestBed } from '@angular/core/testing';

import { Eisdiele } from './eisdiele';

describe('Eisdiele', () => {
  let service: Eisdiele;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Eisdiele);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
