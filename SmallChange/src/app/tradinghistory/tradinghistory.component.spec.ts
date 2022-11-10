import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TradinghistoryComponent } from './tradinghistory.component';
import { RouterTestingModule } from '@angular/router/testing';

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
