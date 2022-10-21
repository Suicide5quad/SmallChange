import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  show: Boolean = true;
  userId: string = '';
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
  }
}
