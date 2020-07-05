import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';

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

interface dataUpdate {
  id: Number,
  nomeNavio: String,
  dataInicio: Date,
  dataFim: Date,
  tipoMovimentacao: String
}

@Component({
  selector: 'app-movimentacao-detalhes',
  templateUrl: './movimentacao-detalhes.component.html',
  styleUrls: ['./movimentacao-detalhes.component.css']
})
export class MovimentacaoDetalhesComponent implements OnInit {
  index: String; 
  data: Response; 
  dataUpdate: dataUpdate;
  dataContainer: ResponseContainers;

  constructor(private route:  ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.getContainers()
    this.route.paramMap.subscribe(
      params => {
        this.index = params.get('index');
      }
    )

    this.getMovimentacao(this.index);
  }
  getContainers() {
    this.http.get<ResponseContainers>('http://localhost:8080/api/containers')
    .subscribe(data => {
      console.log(data)
      this.dataContainer = data;
    });
  }

  getMovimentacao(index) {
    this.http.get<Response>(`http://localhost:8080/api/movimentacoes/${index}`)
    .subscribe(data => {
      this.data = data;
    });
  }

  update(f: NgForm) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    this.dataUpdate = f.value;
    console.log(JSON.stringify(this.dataUpdate))
    
    this.http.put(`http://localhost:8080/api/movimentacoes/${f.value.id}`, JSON.stringify(this.dataUpdate), httpOptions).subscribe(
      res => {
        console.log(res);
        alert("Movimentação atualizado com sucesso!");
      },
      err => {
        console.log(err)
        alert('Houve um problema ao atualizado o movimentação');
      });
  }

}
