import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let prevToken = null;
let token = null;

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoServiceService {

  constructor(private http: HttpClient) {
    prevToken = JSON.parse(localStorage.getItem('@user:token'));
    token = `Bearer ${prevToken.replace('"', '').replace('"', '')}`;
  }

baseUrl = 'http://localhost:8080/';
httpOptions = null;
// Headers


getMovimentacoes() {  
 this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": token,
    }),
  };
    
  return this.http.get(
    `${this.baseUrl}movimentacoes`,
    this.httpOptions
  );
}

getMovimentacaoById(id) {  
  this.httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       "Authorization": token,
     }),
   };
     
   return this.http.get(
     `${this.baseUrl}movimentacoes/${id}`,
     this.httpOptions
   );
 }

criarMovimentacao(data) {  
  this.httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       "Authorization": token,
     }),
   };
     
   return this.http.post(
     `${this.baseUrl}movimentacoes`, 
     data,
     this.httpOptions
   );
 }


 updateMovimentacao(data, id) {  
  this.httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       "Authorization": token,
     }),
   };       
   return this.http.put(
     `${this.baseUrl}movimentacoes/${id}`, 
     data,
     this.httpOptions
   );
 }

deleteMovimentacoes(id) {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": token,
    }),
  };
  return this.http.delete(`${this.baseUrl}movimentacoes/${id}`, this.httpOptions);
}

}
