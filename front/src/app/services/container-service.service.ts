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

  getContainerById(id) {  
    this.httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         "Authorization": token,
       }),
     };
       
     return this.http.get(
       `${this.baseUrl}containers/${id}`,
       this.httpOptions
     );
   }

  criarContainer(data) {  
    this.httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         "Authorization": token,
       }),
     };
       
     return this.http.post(
       `${this.baseUrl}containers`, 
       data,
       this.httpOptions
     );
   }

   updateContainer(data, id) {  
    this.httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         "Authorization": token,
       }),
     };       
     return this.http.put(
       `${this.baseUrl}containers/${id}`, 
       data,
       this.httpOptions
     );
   }

  deleteContainer(id) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": token,
      }),
    };
    return this.http.delete(`${this.baseUrl}containers/${id}`, this.httpOptions);
  }
}
