import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { PhonePipe } from '../phone';
import { LoginService } from '../login.service';
import { MatDialog } from '@angular/material/dialog';
import { WalletComponent } from './wallet/wallet.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public userId: number =0;
  public userName: string = '';
  public balance: number = 0;
  public email: string = '';
  public dob!: Date;
  public phNo: string = '';
  constructor(
    private route: ActivatedRoute,
    private userServ: UserService,
    public loginServ: LoginService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.userServ.getUserById(this.userId).subscribe((res) => {
        this.balance = res.balance;
        this.email = res.emailId;
        this.userName = res.firstName + ' ' + res.lastName;
        this.dob = res.dob;
        this.phNo = res.phNo;
      });
    });
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(WalletComponent);
    dialogRef.componentInstance.data = data;
  }
}
