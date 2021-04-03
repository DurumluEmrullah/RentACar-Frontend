import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetingsComponent } from './setings.component';

describe('SetingsComponent', () => {
  let component: SetingsComponent;
  let fixture: ComponentFixture<SetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
