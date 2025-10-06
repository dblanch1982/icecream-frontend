import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamType } from './icecream-type';

describe('IcecreamType', () => {
  let component: IcecreamType;
  let fixture: ComponentFixture<IcecreamType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcecreamType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcecreamType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
