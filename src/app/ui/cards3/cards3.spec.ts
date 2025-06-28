import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards3 } from './cards3';

describe('Cards3', () => {
  let component: Cards3;
  let fixture: ComponentFixture<Cards3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cards3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
