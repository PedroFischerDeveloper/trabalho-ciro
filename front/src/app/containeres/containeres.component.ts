import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-containeres',
  templateUrl: './containeres.component.html',
  styleUrls: ['./containeres.component.css']
})
export class ContaineresComponent implements OnInit {

  token;
  data; 
  headers;
  


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTodosContainer();
    this.token = JSON.parse( localStorage.getItem('@user:token') );
    this.token = this.token.replace('"',"").replace('"',"");
    this.headers = {
      'Authorization': `Bearer ${this.token}`,
    };
  }
  
  
  
  getTodosContainer() {
    this.http.get('http://localhost:8080/containers', 
    {headers: new HttpHeaders(this.headers)})
    .subscribe(data => {
      console.log(data)
      this.data = data;
    });
  }
  
  deletarContainer(id) {
    this.http.delete(`http://localhost:8080/containers/${id}`)
    .subscribe(
      res => {
        console.log(res);
        this.getTodosContainer();
      },
      err => {
        console.log(err)
      });
  }

}
