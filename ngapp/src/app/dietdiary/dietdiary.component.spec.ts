import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietdiaryComponent } from './dietdiary.component';

describe('DietdiaryComponent', () => {
  let component: DietdiaryComponent;
  let fixture: ComponentFixture<DietdiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietdiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietdiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
