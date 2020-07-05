import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Response {
  id: Number,
  nomeCliente: String, 
  numeroContainer: String, 
  statusContainer: String,
  categoriaContainer: String,
  tipoContainer: Number
}

@Component({
  selector: 'app-containeres',
  templateUrl: './containeres.component.html',
  styleUrls: ['./containeres.component.css']
})
export class ContaineresComponent implements OnInit {

  data: Response; 
  


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTodosContainer();
  }

  getTodosContainer() {
    this.http.get<Response>('http://localhost:8080/api/containers')
    .subscribe(data => {
      this.data = data;
    });
  }
  
  deletarContainer(id) {
    this.http.delete<Response>(`http://localhost:8080/api/containers/${id}`)
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
