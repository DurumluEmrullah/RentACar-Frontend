import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandOperationComponent } from './brand-operation.component';

describe('BrandOperationComponent', () => {
  let component: BrandOperationComponent;
  let fixture: ComponentFixture<BrandOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
