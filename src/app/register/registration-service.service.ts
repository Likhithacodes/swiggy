import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  private apiUrl = 'https://672af277976a834dd024fa88.mockapi.io/users'; // Replace with your mock API endpoint

  constructor(private http: HttpClient) {}

  registerUser(data: { name: string; email: string; phone: string }): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  checkPhoneNumber(phone: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?phone=${phone}`);
  }
}