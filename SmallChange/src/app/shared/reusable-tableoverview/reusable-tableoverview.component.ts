import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-table-overview',
  templateUrl: './reusable-tableoverview.component.html',
  styleUrls: ['./reusable-tableoverview.component.scss'],
})
export class ReusableTableOverviewComponent implements OnInit {
  @Input() invested_amount: number = 0;
  @Input() current_amount: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
