import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  logout() {
    this.loginServ.isLoggedIn = false;
    this.router.navigate([`Login`]);
  }
  constructor(
    private route: ActivatedRoute,
    private loginServ: LoginService,
    private router: Router
  ) {}
  show: Boolean = true;
  userId: string = '';
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
  }
}
