import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Response {
    id: Number,
    nomeNavio: String,
    dataInicio: Date,
    dataFim: Date,
    tipoMovimentacao: String
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
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {
  data: Response; 
  dataContainer: ResponseContainers;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getContainers();
    this.getTodasMovimentacoes()
  }

  getContainers() {
    this.http.get<ResponseContainers>('http://localhost:8080/api/containers')
    .subscribe(data => {
      this.dataContainer = data;
    });
  }

  getByNome(navio) {
    this.http.get<Response>(`http://localhost:8080/api/navio/filtro?navio=${navio}`)
    .subscribe(data => {
      this.data = data;
    });
  }

  getTodasMovimentacoes() {
    this.http.get<Response>('http://localhost:8080/api/movimentacoes')
    .subscribe(data => {
      this.data = data;
    });
  }

  deletarContainer(id) {
    console.log(id)
    this.http.delete<Response>(`http://localhost:8080/api/movimentacoes/${id}`)
    .subscribe(
      res => {
        console.log(res);
        this.getTodasMovimentacoes();
      },
      err => {
        console.log(err)
      });
  }

}
