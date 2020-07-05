import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContaineresComponent } from './containeres/containeres.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ContainerDetalheComponent } from './container-detalhe/container-detalhe.component';
import { ContainerCriarComponent } from './container-criar/container-criar.component';

import { MovimentacaoDetalhesComponent } from './movimentacao-detalhes/movimentacao-detalhes.component';
import { MovimentacaoCriarComponent } from './movimentacao-criar/movimentacao-criar.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ContaineresComponent,
    MovimentacaoComponent,
    IndexComponent,
    NavBarComponent,
    ContainerDetalheComponent,
    ContainerCriarComponent,
    MovimentacaoDetalhesComponent,
    MovimentacaoCriarComponent,
    AuthComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
