import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BuyTradeComponent } from './buy-trade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';

describe('BuyTradeComponent', () => {
  let component: BuyTradeComponent;
  let fixture: ComponentFixture<BuyTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyTradeComponent],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule],
      providers: [DatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
