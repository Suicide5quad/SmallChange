// import { Input } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';

// import { LoginFormComponent } from './login-form.component';

// describe('LoginFormComponent', () => {
//   let component: LoginFormComponent;
//   let fixture: ComponentFixture<LoginFormComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [LoginFormComponent],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginFormComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should verify if a user cannot login with a valid username and an invalid password', () => {
//     const hostElement = fixture.nativeElement;
//     const usernameInput: HTMLInputElement =
//       hostElement.querySelector('#username');
//     const passInput: HTMLInputElement = hostElement.querySelector('#password');
//     const errorPassText = fixture.debugElement.query(By.css('#errorTextPass'));
//     usernameInput.value = 'Abcd';
//     passInput.value = 'abcd';
//     usernameInput.dispatchEvent(new Event('input'));
//     passInput.dispatchEvent(new Event('input'));
//     fixture.detectChanges();
//     expect(errorPassText.styles['display']).toBe('block');
//   });
//   it('should verify if a user cannot login with an invalid username and a valid password', () => {
//     const hostElement = fixture.nativeElement;
//     const usernameInput: HTMLInputElement =
//       hostElement.querySelector('#username');
//     const passInput: HTMLInputElement = hostElement.querySelector('#password');
//     const errorUsernameText = fixture.debugElement.query(By.css('#errorText'));
//     usernameInput.value = '$Abcd';
//     passInput.value = 'abcdefg';
//     usernameInput.dispatchEvent(new Event('input'));
//     passInput.dispatchEvent(new Event('input'));
//     fixture.detectChanges();
//     expect(errorUsernameText.styles['display']).toBe('block');
//   });
//   it('should verify if a user can login with a valid username and a valid password', () => {
//     const hostElement = fixture.nativeElement;
//     const usernameInput: HTMLInputElement =
//       hostElement.querySelector('#username');
//     const passInput: HTMLInputElement = hostElement.querySelector('#password');
//     const errorUsernameText = fixture.debugElement.query(By.css('#errorText'));
//     usernameInput.value = 'Abcd';
//     passInput.value = 'abcdefg';
//     usernameInput.dispatchEvent(new Event('input'));
//     passInput.dispatchEvent(new Event('input'));
//     fixture.detectChanges();
//     expect(errorUsernameText.styles['display']).toBe('none');
//   });
//   it('should accept password only greater than 6 alphabets, numbers and hyphen or underscore',()=>{
//     const hostElement = fixture.nativeElement;
//     const passInput: HTMLInputElement = hostElement.querySelector('#password');
//     const errorPassText = fixture.debugElement.query(By.css('#errorTextPass'));
//     passInput.value = 'abc&2'
//     passInput.dispatchEvent(new Event('input'))
//     fixture.detectChanges();
//     expect(errorPassText.styles['display']).toBe('block');
//     passInput.value = 'abcedfck-1'
//     passInput.dispatchEvent(new Event('input'))
//     fixture.detectChanges();
//     expect(errorPassText.styles['display']).toBe('none');
//   })
//   it('should accept password which does not exceed 24 alphabets, numbers and hyphen or underscore',()=>{
//     const hostElement = fixture.nativeElement;
//     const passInput: HTMLInputElement = hostElement.querySelector('#password');
//     const errorPassText = fixture.debugElement.query(By.css('#errorTextPass'));
//     passInput.value = 'abc_2abc_2abc_2abc_2abc_2'
//     passInput.dispatchEvent(new Event('input'))
//     fixture.detectChanges();
//     expect(errorPassText.styles['display']).toBe('block');
//     passInput.value = 'abcedfck-1'
//     passInput.dispatchEvent(new Event('input'))
//     fixture.detectChanges();
//     expect(errorPassText.styles['display']).toBe('none');
//   })
//   it('should accept username which does not exceed 18 alphabets, numbers and hyphen or underscore',()=>{
//     const hostElement = fixture.nativeElement;
//     const userInput: HTMLInputElement = hostElement.querySelector('#username');
//     const errorText = fixture.debugElement.query(By.css('#errorText'));
//     userInput.value = 'abc_2abc_2abc_2abc_2abc_2'
//     userInput.dispatchEvent(new Event('input'))
//     fixture.detectChanges();
//     expect(errorText.styles['display']).toBe('block');
//     userInput.value = 'abced-1'
//     userInput.dispatchEvent(new Event('input'))
//     fixture.detectChanges();
//     expect(errorText.styles['display']).toBe('none');
//   })
//   it('should accept username only greater than 3 alphabets, numbers and hyphen or underscore',()=>{
//     const hostElement = fixture.nativeElement;
//     const userInput: HTMLInputElement = hostElement.querySelector('#username');
//     const errorText = fixture.debugElement.query(By.css('#errorText'));
//     userInput.value = 'ab&2'
//     userInput.dispatchEvent(new Event('input'))
//     fixture.detectChanges();
//     expect(errorText.styles['display']).toBe('block');
//     userInput.value = 'abcedfck-1'
//     userInput.dispatchEvent(new Event('input'))
//     fixture.detectChanges();
//     expect(errorText.styles['display']).toBe('none');
//   })
//   // it('should capture user and password details on clicking log in button',()=>{
//   //   const hostElement = fixture.nativeElement;
//   //   const usernameInput: HTMLInputElement =
//   //     hostElement.querySelector('#username');
//   //   const passInput: HTMLInputElement = hostElement.querySelector('#password');
//   //   usernameInput.value='abcd'
//   //   passInput.value='abcdef13'
//   //   usernameInput.dispatchEvent(new Event('input'));
//   //   passInput.dispatchEvent(new Event('input'));
//   //   fixture.detectChanges()
//   //   expect(component.login()).toEqual({'username':'abcd','password':'abcdef13'})
//   // })
// });
