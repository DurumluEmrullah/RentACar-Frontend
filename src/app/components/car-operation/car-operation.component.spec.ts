import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOperationComponent } from './car-operation.component';

describe('CarOperationComponent', () => {
  let component: CarOperationComponent;
  let fixture: ComponentFixture<CarOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
