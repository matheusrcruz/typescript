import { Negociacoes } from "../models/negociacoes.js";
import { Negociacao } from "./../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negocicoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  public adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negocicoes.adicionar(negociacao);
    console.log(this.negocicoes.lista())
    this.limparFormulario();
  }

  //Tipa o metodo para não cair na pegadinha de errar o retorno
  public criaNegociacao(): Negociacao {
    const exp = /-/g;                       //(expressão que quero), (valorSubistituir)
    const date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }
  public limparFormulario(): void {
    this.inputData.value = "";
    this.inputData.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}
