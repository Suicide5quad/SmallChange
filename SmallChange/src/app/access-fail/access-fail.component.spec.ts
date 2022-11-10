import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AccessFailComponent } from './access-fail.component';

describe('AccessFailComponent', () => {
  let component: AccessFailComponent;
  let fixture: ComponentFixture<AccessFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessFailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the error code', () => {
    const fixture = TestBed.createComponent(AccessFailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('403');
  });

  it('should contain the error message', () => {
    const fixture = TestBed.createComponent(AccessFailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.subtitle').textContent).toContain(
      `You don't have permission to access this page.`
    );
  });

  it('should contain the error details', () => {
    const fixture = TestBed.createComponent(AccessFailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.isi').textContent).toContain(
      `A web server may return a 403 Forbidden HTTP status code in response to a request from a client for a web page or resource to indicate that the server can be reached and understood the request, but refuses to take any further action. Status code 403 responses are the result of the web server being configured to deny access, for some reason, to the requested resource by the client.`
    );
  });
});
