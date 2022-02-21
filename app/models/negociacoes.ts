import { Negociacao } from './negociacao.js';
export class Negociacoes{
    //Sugar Sintaxe para generic
    private negociacoes:Negociacao[] = [];

    adicionar(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }
    lista(): readonly Negociacao[]{
        return this.negociacoes; 
    }
    
}

// const neociacoes =  new Negociacoes();
// neociacoes.lista().forEach(n =>{
   
// })