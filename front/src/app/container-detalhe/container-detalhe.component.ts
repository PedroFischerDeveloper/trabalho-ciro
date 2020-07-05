import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';


interface Response {
  id: Number,
  nomeCliente: String, 
  numeroContainer: String, 
  statusContainer: String,
  categoriaContainer: String,
  tipoContainer: Number
}

interface dataUpdate {
  id: Number,
  nomeCliente: String, 
  numeroContainer: String, 
  statusContainer: String,
  categoriaContainer: String,
  tipoContainer: Number
}

@Component({
  selector: 'app-container-detalhe',
  templateUrl: './container-detalhe.component.html',
  styleUrls: ['./container-detalhe.component.css']
})
export class ContainerDetalheComponent implements OnInit {
  index: String; 
  data: Response; 
  dataUpdate: dataUpdate;
  

  constructor(private route:  ActivatedRoute, private http: HttpClient) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.index = params.get('index');
      }
    )

    this.getContainer(this.index);
  }

  getContainer(index) {
    this.http.get<Response>(`http://localhost:8080/api/containers/${index}`)
    .subscribe(data => {
      this.data = data;
    });
  }

  update(f: NgForm) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    this.dataUpdate = f.value;
    console.log(this.dataUpdate)
    this.http.put(`http://localhost:8080/api/containers/${f.value.id}`, JSON.stringify(this.dataUpdate), httpOptions).subscribe(
      res => {
        console.log(res);
        alert("Container atualizado com sucesso!")
      },
      err => {
        console.log(err)
        alert('Houve um problema ao atualizar o container');
      });
  }

}
