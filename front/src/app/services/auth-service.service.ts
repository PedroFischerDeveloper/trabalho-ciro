import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthType, RegisterType } from '../models/AuthType';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',  })
  }
  
  login(data: AuthType) {
    return this.http.post(`${this.baseUrl}authenticate`, data, this.httpOptions);
  }

  register(data: RegisterType) {
    return this.http.post(`${this.baseUrl}create`, data, this.httpOptions);
  }
}
