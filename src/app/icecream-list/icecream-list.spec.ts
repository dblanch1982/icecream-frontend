import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamList } from './icecream-list';

describe('IcecreamList', () => {
  let component: IcecreamList;
  let fixture: ComponentFixture<IcecreamList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcecreamList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcecreamList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
