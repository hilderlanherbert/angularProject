import { FRASES } from './frase-mock';
import { Frase } from './../shared/frase.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] =  FRASES;

  public resposta: string;

  public rodada: number = 0;

  public rodadaFrase: Frase;

  public progresso: number = 0;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase); 
   }

  ngOnInit() {
  }

 public atualizaReposta(resposta:Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {

    if(this.rodadaFrase.frasePt == this.resposta) {
      alert('A tradução está correta!!!')
      this.rodada++;
      this.rodadaFrase = this.frases[this.rodada];
      this.progresso = this.progresso + (100 / this.frases.length)
    } else {
      alert('A tradução está incorreta :/')
    }

    
  }

}
