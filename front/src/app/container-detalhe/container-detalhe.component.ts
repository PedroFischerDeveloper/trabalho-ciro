import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { ContainerServiceService } from '../services/container-service.service';

@Component({
  selector: 'app-container-detalhe',
  templateUrl: './container-detalhe.component.html',
  styleUrls: ['./container-detalhe.component.css']
})
export class ContainerDetalheComponent implements OnInit {
  index: String; 
  data; 
  dataUpdate;
  

  constructor(private route:  ActivatedRoute,
    private containerService: ContainerServiceService
    ) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.index = params.get('index');
      }
    )

    this.getContainer(this.index);
  }

  getContainer(index) {
    this.containerService.getContainerById(index).subscribe(res => {
     console.log(res);
     
      this.data = res
    })
  }

  update(f: NgForm) {
    this.dataUpdate = f.value;
    this.containerService.updateContainer(this.dataUpdate, this.index).subscribe(res => {
     console.log(res);
     
    })
  }

}
