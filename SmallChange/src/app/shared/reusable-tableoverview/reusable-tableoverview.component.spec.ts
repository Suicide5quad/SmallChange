import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTableoverviewComponent } from './reusable-tableoverview.component';

describe('ReusableTableoverviewComponent', () => {
  let component: ReusableTableoverviewComponent;
  let fixture: ComponentFixture<ReusableTableoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableTableoverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableTableoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
