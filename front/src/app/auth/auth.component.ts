import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../services/auth-service.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthType} from '../models/AuthType';

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
  
  POST:AuthType;

  constructor(private http: HttpClient, private authServiceService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login(f: NgForm) {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    this.POST = f.value;
    console.log(this.POST)
    
    this.authServiceService.login({userName:"pedro", password:"vaisegurando"}).subscribe((res) => {
      if(res != "" || res!= null) {

        let user = res;
        console.log(user);
        localStorage.setItem('token', JSON.stringify(user));
        this.router.navigate(['/main']);
      } else {
        alert("Não autorizado");
      }
    })
  }

}
