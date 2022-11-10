import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [NavBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have portfolio nav', () => {
    const portfolio = fixture.debugElement.queryAll(By.css('nav-item'));
    fixture.detectChanges();
    expect(portfolio).toBeTruthy();
  });

  it('should have activity nav', () => {
    const activity = fixture.debugElement.queryAll(By.css('nav-item'));
    fixture.detectChanges();

    expect(activity).toBeTruthy();
  });

  it('should have trade nav', () => {
    const trade = fixture.debugElement.queryAll(By.css('nav-item'));
    fixture.detectChanges();

    expect(trade).toBeTruthy();
  });

  it('should have preferences nav', () => {
    const preferences = fixture.debugElement.queryAll(By.css('nav-item'));
    fixture.detectChanges();

    expect(preferences).toBeTruthy();
  });
});
