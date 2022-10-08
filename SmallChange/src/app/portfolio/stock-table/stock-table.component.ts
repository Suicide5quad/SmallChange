import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { StockHolding } from 'src/app/models/stock-holding';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss'],
})
export class StockTableComponent implements OnInit {
  invested_amount: number = 0;
  current_amount: number = 0;
  @Input() holdings!: Observable<StockHolding[]>;
  @Output() openDialogEvent = new EventEmitter<any>();

  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'security_name' },
    { headerName: 'Code', field: 'security_code' },
    { headerName: 'Buy Price', field: 'buy_price' },
    { headerName: 'LTP', field: 'last_date_price' },
    { headerName: 'Quantity', field: 'qty' },
    { headerName: 'Asset Class', field: 'asset_class' },
  ];
  private gridApi!: GridApi;
  public domLayout: 'normal' | 'autoHeight' | 'print' = 'autoHeight';
  rowData: StockHolding[] = [];
  userId: any;
  errorMessage!: string;
  public paginationPageSize = 10;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.invested_amount = 0;
    this.current_amount = 0;
    this.getHoldings(this.holdings);
  }

  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      (document.getElementById('filter-text-box') as HTMLInputElement).value
    );
  }

  public rowSelection: 'single' | 'multiple' = 'single';
  public defaultColDef: ColDef = {
    flex: 1,
    editable: true,
  };
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
  public getHoldings(holdings: Observable<StockHolding[]>) {
    let holding: StockHolding[] = [];
    holdings.subscribe({
      next: (data) => {
        holding = data;
        this.rowData = holding;
        for (var i = 0; i < holding.length; i++) {
          this.invested_amount += holding[i].buy_price * holding[i].qty;
          this.current_amount += holding[i].last_date_price * holding[i].qty;
        }
      },
    });
  }
  openDialog(data: any) {
    this.openDialogEvent.emit({ dialog_type: 'stock', data: data.data });
  }
}
