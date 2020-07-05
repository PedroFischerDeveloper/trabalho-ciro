import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthType, RegisterType } from '../models/AuthType';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseUrl = 'localhost:8080';
  constructor(private http: HttpClient) {}

  login(data: AuthType) {
    this.http.post(`${this.baseUrl}`, data);
  }

  register(data: RegisterType) {
    this.http.post(`${this.baseUrl}`, data);
  }
}
