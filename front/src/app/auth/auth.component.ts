import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../services/auth-service.service';

import { Router } from '@angular/router';
import { AuthType } from '../models/AuthType';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  dataPOST: AuthType;
  form;
  constructor(
    private http: HttpClient,
    private authService: AuthServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      userName: '',
      password: '',
    });
  }

  ngOnInit(): void {
    let token = JSON.parse(localStorage.getItem('@user:token'));
    if (token) {
      this.router.navigate(['main']);
    }
  }

  onSubmit(e) {
    this.dataPOST = e;
    if (this.dataPOST.userName == '' || this.dataPOST.password == '') {
      alert('Exitem campos vazios');
    }
    this.authService.login(this.dataPOST).subscribe((res) => {
      localStorage.setItem('@user:token', JSON.stringify(res[0]));
      this.router.navigate(['main']);
    });
  }
}
