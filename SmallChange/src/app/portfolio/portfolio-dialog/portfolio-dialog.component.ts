import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-dialog',
  templateUrl: './portfolio-dialog.component.html',
  styleUrls: ['./portfolio-dialog.component.scss'],
})
export class PortfolioDialogComponent implements OnInit {
  public data = { dialog_type: '', data: {} };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.closeAll();
  }
}
