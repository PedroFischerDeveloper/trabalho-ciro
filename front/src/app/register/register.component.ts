import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { RegisterType } from '../models/AuthType';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  dataPOST: RegisterType;
  form;
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: '',
      regra: '',
      email: '',
      senha: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(e) {
    this.dataPOST = e;
    console.log(this.dataPOST);
  }
}
