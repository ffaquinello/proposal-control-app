import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectStatusComponent } from './select-status/select-status.component';
import { SelectResponsavelComponent } from './select-responsavel/select-responsavel.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeComponent } from './home/home.component';
import { CadastrarPropostaComponent } from './cadastrar-proposta/cadastrar-proposta.component';
import { AlterarPropostaComponent } from './alterar-proposta/alterar-proposta.component';
import { CadastrarRespomsavelComponent } from './cadastrar-respomsavel/cadastrar-respomsavel.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectStatusComponent,
    SelectResponsavelComponent,
    RodapeComponent,
    CabecalhoComponent,
    HomeComponent,
    CadastrarPropostaComponent,
    AlterarPropostaComponent,
    CadastrarRespomsavelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
