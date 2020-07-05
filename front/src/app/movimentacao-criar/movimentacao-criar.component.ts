import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';

interface dataPost {
  nomeNavio: String,
  dataInicio: Date,
  dataFim: Date,
  tipoMovimentacao: String
  containerId: Number
}

interface ResponseContainers {
  id: Number,
  nomeCliente: String, 
  numeroContainer: String, 
  statusContainer: String,
  categoriaContainer: String,
  tipoContainer: Number
}

@Component({
  selector: 'app-movimentacao-criar',
  templateUrl: './movimentacao-criar.component.html',
  styleUrls: ['./movimentacao-criar.component.css']
})
export class MovimentacaoCriarComponent implements OnInit {
  dataPost: dataPost;
  dataContainer: ResponseContainers;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getContainers();
  }

  getContainers() {
    this.http.get<ResponseContainers>('http://localhost:8080/api/containers')
    .subscribe(data => {
      console.log(data)
      this.dataContainer = data;
    });
  }

  create(f: NgForm) {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    this.dataPost = f.value;
    console.log(JSON.stringify(this.dataPost))
    
    this.http.post('http://localhost:8080/api/movimentacoes', JSON.stringify(this.dataPost), httpOptions).subscribe(
      res => {
        alert('Movimentação criada com sucesso');
      },
      err => {
        console.log(err)
        alert('Houve um problema ao criar o movimentação');
      });
  }

}
