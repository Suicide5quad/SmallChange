import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should verify if a user cannot login with a valid username and an invalid password', () => {
    const hostElement = fixture.nativeElement;
    const usernameInput: HTMLInputElement =
      hostElement.querySelector('#username');
    const passInput: HTMLInputElement = hostElement.querySelector('#password');
    const errorPassText = fixture.debugElement.query(By.css('#errorTextPass'));
    usernameInput.value = 'Abcd';
    passInput.value = 'abcd';
    usernameInput.dispatchEvent(new Event('input'))
    passInput.dispatchEvent(new Event('input'))
    fixture.detectChanges();
    expect(errorPassText.styles['display']).toBe('block');
  });
});
