import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareCheckboxComponent } from './square-checkbox.component';

describe('SquareCheckboxComponent', () => {
  let component: SquareCheckboxComponent;
  let fixture: ComponentFixture<SquareCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
