import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Preferences } from '../models/preferences';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  private baseURL = 'http://localhost:8080/smallchange/preferences';
  private baseUserURL = 'http://localhost:8080/smallchange/preferences/user';

  constructor(private httpClient: HttpClient) {}

  addPreference(id: String, preference: Preferences): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/' + id, preference);
  }

  getPreferenceByPreferenceId(id: number): Observable<Preferences> {
    return this.httpClient.get<Preferences>(`${this.baseURL}/${id}`);
  }

  getPreferenceByUserId(id: number): Observable<Preferences> {
    return this.httpClient.get<Preferences>(`${this.baseUserURL}/${id}`);
  }

  updatePreference(id: number, preference: Preferences): Observable<Object> {
    return this.httpClient.put(`${this.baseUserURL}/${id}`, preference);
  }
}
