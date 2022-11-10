import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PreferencesService } from './preferences.service';

describe('PreferencesService', () => {
  let service: PreferencesService;

  beforeEach(async () => {
    service = TestBed.inject(PreferencesService);
    await TestBed.configureTestingModule({
      declarations: [ PreferencesService ],
      imports:[HttpClientTestingModule,HttpClient]
    })
    .compileComponents();
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
