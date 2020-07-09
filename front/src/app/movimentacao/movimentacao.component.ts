import { Component, OnInit } from '@angular/core';
import { MovimentacaoServiceService } from '../services/movimentacao-service.service';


@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {
  data 
  dataContainer;

  constructor(private moimentacaoService: MovimentacaoServiceService) {
  
   }

  ngOnInit(): void {
    this.getTodasMovimentacoes()
  }

  getTodasMovimentacoes() {
    this.moimentacaoService.getMovimentacoes()
    .subscribe(data => {      
      this.data = data;
    });
  }


  deletarContainer(id) {
    this.moimentacaoService.deleteMovimentacoes(id).subscribe(res => {

      setTimeout(() => {
        this.getTodasMovimentacoes()
      }, 500);
    })
  }


}
