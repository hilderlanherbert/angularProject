import { Component, OnInit } from '@angular/core';

import { FRASES } from './frase-mock';
import { Frase } from './../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] =  FRASES;

  public resposta: string = '';

  public rodada: number = 0;

  public rodadaFrase: Frase;

  public progresso: number = 0;

  constructor() {
   this.atualizaRodada();
   }

  ngOnInit() {
  }

 public atualizaReposta(resposta:Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePt == this.resposta) {
      alert('A tradução está correta!!!')
      this.rodada++;
      this.atualizaRodada();
      this.progresso = this.progresso + (100 / this.frases.length);
      this.resposta = '';

    } else {

      alert('A tradução está incorreta :/')

    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
  }

}
