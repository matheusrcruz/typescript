export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes]; // Pegue cada item desse array e coloca nessa nova lista com o spread operator 
        // Isso significa que não vai alterar a negociação original :) 
    }
}
// const neociacoes =  new Negociacoes();
// neociacoes.lista().forEach(n =>{
// })
