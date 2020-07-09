import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContainerServiceService } from '../services/container-service.service';

@Component({
  selector: 'app-containeres',
  templateUrl: './containeres.component.html',
  styleUrls: ['./containeres.component.css'],
})
export class ContaineresComponent implements OnInit {
  token;
  data;
  headers;

  constructor(private http: HttpClient, private containerService: ContainerServiceService) {
    this.getTodosContainer();
   
  }

  ngOnInit(): void {}

  getTodosContainer() {
    this.containerService.getContainer().subscribe(res => {
      this.data = res
      
    })
  }

  deletarContainer(id) {
    this.http.delete(`http://localhost:8080/containers/${id}`).subscribe(
      (res) => {
        console.log(res);
        this.getTodosContainer();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
