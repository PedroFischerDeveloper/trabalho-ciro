import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let prevToken = null;
let token = null;

@Injectable({
  providedIn: 'root',
})
export class ContainerServiceService {
  constructor(private http: HttpClient) {
    prevToken = JSON.parse(localStorage.getItem('@user:token'));
    token = `Bearer ${prevToken.replace('"', '').replace('"', '')}`;
  }

  baseUrl = 'http://localhost:8080/';
  httpOptions = null;
  // Headers
  

  getContainer() {  
   this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": token,
      }),
    };
      
    return this.http.get(
      `${this.baseUrl}containers`,
      this.httpOptions
    );
  }

  // register(data: RegisterType) {
  //   return this.http.post(`${this.baseUrl}create`, data, this.httpOptions);
  // }
}
