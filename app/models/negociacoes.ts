import { Negociacao } from './negociacao.js';
export class Negociacoes{

    private negociacoes:Array<Negociacao> = [];

    adicionar(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }
    lista(): Array<Negociacao>{
        return [...this.negociacoes]; // Pegue cada item desse array e coloca nessa nova lista com o spread operator 
                                      // Isso significa que não vai alterar a negociação original :) 
    }
    
}

// const neociacoes =  new Negociacoes();
// neociacoes.lista().forEach(n =>{
   
// })