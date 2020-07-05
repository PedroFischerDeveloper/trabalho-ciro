import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';


interface Container {   
  nomeCliente: String,
  numeroContainer: String,
  statusContainer: String,
  tipoContainer: Number
  categoriaContainer: String,
}

interface dataPost {
  nomeCliente: String,
  numeroContainer: String,
  statusContainer: String,
  tipoContainer: Number
  categoriaContainer: String,
}

@Component({
  selector: 'app-container-criar',
  templateUrl: './container-criar.component.html',
  styleUrls: ['./container-criar.component.css']
})
export class ContainerCriarComponent implements OnInit {

  container:Container;
  dataPOST:dataPost;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  

  create(f: NgForm) {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    this.dataPOST = f.value;
    
    this.http.post('http://localhost:8080/api/containers', JSON.stringify(this.dataPOST), httpOptions).subscribe(
      res => {
        alert('Container criada com sucesso');
      },
      err => {
        console.log(err)
        alert('Houve um problema ao criar o container');
      });
  }

}
