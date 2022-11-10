import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SellTradeComponent } from './sell-trade.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';
describe('SellTradeComponent', () => {
  let component: SellTradeComponent;
  let fixture: ComponentFixture<SellTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellTradeComponent],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule],
      providers: [DatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
