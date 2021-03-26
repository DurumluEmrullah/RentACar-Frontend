import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorOperationComponent } from './color-operation.component';

describe('ColorOperationComponent', () => {
  let component: ColorOperationComponent;
  let fixture: ComponentFixture<ColorOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
