import { Negociacoes } from "../models/negociacoes.js";
import { Negociacao } from "./../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.negocicoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negocicoes.adicionar(negociacao);
        console.log(this.negocicoes.lista());
        this.limparFormulario();
    }
    //Tipa o metodo para não cair na pegadinha de errar o retorno
    criaNegociacao() {
        const exp = /-/g; //(expressão que quero), (valorSubistituir)
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputData.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
