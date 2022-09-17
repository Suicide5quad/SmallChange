import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInvestmentPreferencesComponent } from './set-investment-preferences.component';

describe('SetInvestmentPreferencesComponent', () => {
  let component: SetInvestmentPreferencesComponent;
  let fixture: ComponentFixture<SetInvestmentPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetInvestmentPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInvestmentPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
