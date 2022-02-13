export class Negociacao {
    constructor(data, quantidade, valor) {
        data = this._data;
        quantidade = this._quantidade;
        valor = this._valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}
