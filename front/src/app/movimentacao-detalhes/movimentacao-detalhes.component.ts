import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { MovimentacaoServiceService } from '../services/movimentacao-service.service';
import { ContainerServiceService } from '../services/container-service.service';


@Component({
  selector: 'app-movimentacao-detalhes',
  templateUrl: './movimentacao-detalhes.component.html',
  styleUrls: ['./movimentacao-detalhes.component.css']
})
export class MovimentacaoDetalhesComponent implements OnInit {
  index: String; 
  data; 
  dataUpdate;
  dataContainer;

  constructor(private route:  ActivatedRoute, 
    private movimentacaoService: MovimentacaoServiceService,
    private containerService: ContainerServiceService,
    ) { }

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
    this.containerService.getContainer()
    .subscribe(data => {      
      this.dataContainer = data;
    });
  }

  getMovimentacao(index) {
      this.movimentacaoService.getMovimentacaoById(index).subscribe(res => {        
        console.log(res);
        
        this.data = res
      })
  }

  update(f: NgForm) {
    this.dataUpdate = f.value;
    this.movimentacaoService.updateMovimentacao(this.dataUpdate, this.index).subscribe(res => {
     console.log(res);
     
    })
    
  }

}
