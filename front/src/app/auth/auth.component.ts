import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

interface dataPost {
  nomeCliente: String,
  numeroContainer: String,
  statusContainer: String,
  tipoContainer: Number
  categoriaContainer: String,
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  dataPOST:dataPost;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(f: NgForm) {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    this.dataPOST = f.value;
    
    this.http.post('http://localhost:8080/api/containers', JSON.stringify(this.dataPOST), httpOptions).subscribe();
  }

}
