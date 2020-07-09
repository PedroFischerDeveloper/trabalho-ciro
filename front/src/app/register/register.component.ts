import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { RegisterType } from '../models/AuthType';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  dataPOST: RegisterType;
  form;
  constructor(
    private authService: AuthServiceService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      userName: '',
      role: '',
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(e) {
    this.dataPOST = e;
    if (
      this.dataPOST.userName == '' ||
      this.dataPOST.email == '' ||
      this.dataPOST.role == '' ||
      this.dataPOST.password == ''
    ) {
      alert('Exitem campos vazios');
    }
    this.authService.register(this.dataPOST).subscribe((res) => {
      console.log(res);
    });
  }
}
