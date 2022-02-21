import { Negociacao } from './negociacao.js';
export class Negociacoes{
    //Sugar Sintaxe para generic
    private negociacoes:Negociacao[] = [];

    adicionar(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }
    lista(): readonly Negociacao[]{
        return this.negociacoes; // Pegue cada item desse array e coloca nessa nova lista com o spread operator 
                                      // Isso significa que não vai alterar a negociação original :) 
    }
    
}

// const neociacoes =  new Negociacoes();
// neociacoes.lista().forEach(n =>{
   
// })