import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private authenticationService: AuthService,
    private route: ActivatedRoute
  ) {}

  public loginValid = true;
  public submitted = false;
  public username = '';
  public password = '';
  loginForm!: FormGroup;
  registrationForm!: FormGroup;
  public loginRegistrationCardSwitch: boolean = false;

  errorMessage: string = '';
  showError: boolean = false;

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.loginForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9a-zA-Z]*$'),
        Validators.minLength(6),
        Validators.maxLength(24),
      ]),
    });

    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9a-zA-Z]*$'),
        Validators.minLength(6),
        Validators.maxLength(24),
      ]),
      phNo: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
    });
  }
  get userNameField(): any {
    return this.loginForm.get('userName');
  }
  get passwordField(): any {
    return this.loginForm.get('password');
  }

  get emailIdFieldRegister(): any {
    return this.registrationForm.get('emailId');
  }
  get passwordFieldRegister(): any {
    return this.registrationForm.get('password');
  }
  get phoneFieldRegister(): any {
    return this.registrationForm.get('phNo');
  }
  get dobFieldRegister(): any {
    return this.registrationForm.get('dob');
  }

  public onSubmit(): void {
    if (this.loginValid == true) {
      this.submitted = true;
      this.loginValid = true;
      console.log('');
    }
  }
  returnUrl!: string;
  get f() {
    return this.loginForm.controls;
  }
  loginFormSubmit() {
    this.submitted = true;
    this.loginValid = true;
    this.loginService
      .login(this.loginForm.value.userName, this.loginForm.value.password)
      .subscribe({
        next: (data) => {
          if (data != null) {
            this.router.navigate([`Portfolio`, data.id]);
            this.loginService.isLoggedIn = true;
          } else this.showError = true;
        },
      });
  }

  registrationFormSubmit() {
    console.log(this.registrationForm.value);
    this.loginRegistrationCardSwitch = false;
    this.loginService
      .register(
        this.registrationForm.value.firstName,
        this.registrationForm.value.lastName,
        this.registrationForm.value.emailId,
        this.registrationForm.value.password,
        this.registrationForm.value.phNo,
        this.registrationForm.value.dob
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  toggleToRegistrationForm() {
    this.showError = false;
    this.loginRegistrationCardSwitch = true;
  }

  toggleToLoginForm() {
    this.loginRegistrationCardSwitch = false;
  }
}
