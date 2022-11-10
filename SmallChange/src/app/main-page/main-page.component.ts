import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { PhonePipe } from '../phone';
import { LoginService } from '../login.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  removeMoney() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.userServ.getUserById(this.userId).subscribe((res) => {
        this.balance = res.balance;
        this.balance -= this.wallet.value.removeBalance;
        this.userServ
          .updateBalance(this.userId, this.balance)
          .subscribe((res) => {
            console.log('balance updated');
            this.router.navigate(['Home', this.userId]);
            this.wallet.reset();
            this.toggleWallet();
          });
      });
    });
  }
  addMoney() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.userServ.getUserById(this.userId).subscribe((res) => {
        this.balance = res.balance;
        this.balance += this.wallet.value.addBalance;
        this.userServ
          .updateBalance(this.userId, this.balance)
          .subscribe((res) => {
            console.log('balance updated');
            this.router.navigate(['Home', this.userId]);
            this.wallet.reset();
            this.toggleWallet();
          });
      });
    });
  }
  toggleTab() {
    this.isActive = !this.isActive;
  }
  public userId: number = 0;
  public userName: string = '';
  public balance: number = 0;
  public email: string = '';
  updateUser!: User;
  public dob!: Date;
  wallet!: FormGroup;
  public addBalance: number = 0;
  public removeBalance: number = 0;
  public phNo: string = '';
  isActive: boolean = true;
  isLoggedIn = false
  constructor(
    private route: ActivatedRoute,
    public userServ: UserService,
    public loginServ: LoginService,
    public dialog: MatDialog,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      if(window.localStorage.getItem('currentUser') === this.userId.toString())
        {
          this.isLoggedIn = true
        }
      this.userServ.getUserById(this.userId).subscribe((res) => {
        this.balance = res.balance;
        this.email = res.emailId;
        this.userName = res.firstName + ' ' + res.lastName;
        this.dob = res.dob;
        this.phNo = res.phNo;
      });
    });
    this.wallet = new FormGroup({
      addBalance: new FormControl('', [Validators.required]),
      removeBalance: new FormControl('', [Validators.required]),
    });
  }

  toggleWallet() {
    this.userServ.isWalletOpen = !this.userServ.isWalletOpen;
  }
}
