import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { ContainerServiceService } from '../services/container-service.service';


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
  dataPOST;

  constructor(
    private containerService: ContainerServiceService,
  ) { }

  ngOnInit(): void {

  }
  

  create(f: NgForm) {
    this.dataPOST = f.value;
      this.containerService.criarContainer(this.dataPOST).subscribe(res => {
       console.log(res);
       
      })
  }

}
