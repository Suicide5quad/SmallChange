import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTableComponent } from './reusable-table.component';

describe('ReusableTableComponent', () => {
  let component: ReusableTableComponent;
  let fixture: ComponentFixture<ReusableTableComponent>;
  let testUsers: any[] = []
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the table ', (done) => {
    expect(component.tableRows).toEqual(testUsers);
  
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
  
      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(4);
  
      // Header row
      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('Email');
      expect(headerRow.cells[1].innerHTML).toBe('Created');
      expect(headerRow.cells[2].innerHTML).toBe('Roles');
  
      // Data rows
      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toBe('dummy@mail.com');
      expect(row1.cells[1].innerHTML).toBe('01-01-2020');
      expect(row1.cells[2].innerHTML).toBe('admin,standard');
  
      // Test more rows here..
  
      done();
    });
  });
});
