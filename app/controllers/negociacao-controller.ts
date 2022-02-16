import { Negociacao } from "./../models/negociacao.js";



export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
 
    
    
    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(){
       const exp = /-/g;                  //(expressão que quero), (valorSubistituir)
       const date = new Date(this.inputData.value.replace(exp, ','))
       const quantidade = parseInt(this.inputQuantidade.value);
       const valor = parseFloat(this.inputValor.value);
       console.log(`dividido , ${date}, ${quantidade}, ${valor}`)
       const negociacao = new Negociacao(date, quantidade, valor); 
       console.log("sou eu",negociacao);
    }
}