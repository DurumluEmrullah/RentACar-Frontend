import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAndDeleteComponent } from './update-and-delete.component';

describe('UpdateAndDeleteComponent', () => {
  let component: UpdateAndDeleteComponent;
  let fixture: ComponentFixture<UpdateAndDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAndDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAndDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
