import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MockBuilder,
  MockComponent,
  MockInstance,
  MockModule,
  MockProvider,
  MockRender,
  ngMocks,
} from 'ng-mocks';

import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TradinghistoryComponent } from './tradinghistory.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TradeHistoryService } from '../trade-history.service';
import { AppModule } from '../app.module';
import { MatHeaderRowDef, MatRowDef } from '@angular/material/table';

describe('TradinghistoryComponent', () => {
  let component: TradinghistoryComponent;
  let fixture: ComponentFixture<TradinghistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TradinghistoryComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
