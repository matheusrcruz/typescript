export class Negociacao {
    /*
        Em typescript, Se vc deixar private no construtor
        por deibaixo dospanos o Typescript cria atributo de suas asinaturas privadas
        Faz a atribuição
    */
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
