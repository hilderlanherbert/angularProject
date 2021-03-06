import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { FRASES } from './frase-mock';
import { Frase } from './../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] =  FRASES;

  public resposta: string = '';

  public rodada: number = 0;

  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo = new EventEmitter;

  constructor() {
   this.atualizaRodada();
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    
  }

 public atualizaReposta(resposta:Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePt == this.resposta) {
      this.rodada++;
      this.atualizaRodada();
      this.progresso = this.progresso + (100 / this.frases.length);
      this.resposta = '';

      if(this.rodada === 4){
        this.encerrarJogo.emit('vitoria');
      }

    } else {
      this.tentativas--;
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
  }

}
