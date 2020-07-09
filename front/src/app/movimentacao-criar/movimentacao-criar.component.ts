import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ContainerServiceService } from '../services/container-service.service';
import { MovimentacaoServiceService } from '../services/movimentacao-service.service';

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
  dataContainer;
  
  constructor(
    private containerService: ContainerServiceService,
    private movimentacaoService: MovimentacaoServiceService) { }

  ngOnInit(): void {
    this.getContainers();
  }

  getContainers() {
    this.containerService.getContainer()
    .subscribe(data => {
      console.log(data);
      
      this.dataContainer = data;
    });
  }

  create(f: NgForm) {
    this.dataPost = f.value;
    console.log(this.dataPost);
    
      this.movimentacaoService.criarMovimentacao(this.dataPost).subscribe(res => {
       alert(`Criada movimentação para o navio: ${res['nm_navio']}`)
      })
  }

}
