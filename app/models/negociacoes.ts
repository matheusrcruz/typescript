import { Negociacao } from './negociacao.js';
export class Negociacoes{

    private negociacoes:Array<Negociacao> = [];

    adicionar(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }
    lista(): Array<Negociacao>{
        return this.negociacoes;
    }
}

const neociacoes =  new Negociacoes();
neociacoes.lista().forEach(n =>{
   
})