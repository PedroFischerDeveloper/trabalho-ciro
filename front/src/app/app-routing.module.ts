import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import { ContaineresComponent } from './containeres/containeres.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { ContainerDetalheComponent } from './container-detalhe/container-detalhe.component';
import { ContainerCriarComponent } from './container-criar/container-criar.component';
import { MovimentacaoCriarComponent } from './movimentacao-criar/movimentacao-criar.component';
import { MovimentacaoDetalhesComponent } from './movimentacao-detalhes/movimentacao-detalhes.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'cadastro', component: RegisterComponent},
  {path: 'main', component: IndexComponent},
  {path: 'containeres', component: ContaineresComponent},
  {path: 'criar-container', component: ContainerCriarComponent},
  {path: 'detalhe-container/:index', component: ContainerDetalheComponent},
  {path: 'deletar-container/:index', component: ContaineresComponent},
  
  {path: 'movimentacoes', component: MovimentacaoComponent},
  {path: 'criar-movimentacoes', component: MovimentacaoCriarComponent},
  {path: 'detalhe-movimentacoes/:index', component: MovimentacaoDetalhesComponent},
  {path: 'deletar-movimentacoes/:index', component: MovimentacaoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
