export class Negociacao{
    /*
        Em typescript, Se vc deixar private no construtor 
        por deibaixo dospanos o Typescript cria atributo de suas asinaturas privadas
        Faz a atribuição  
    */
  
    constructor( 
         private _data: Date,
         public readonly quantidade: number, 
         public readonly valor: number
         )
    {
    }
    get data(): Date{
        const data = new Date(this._data.getTime());

        return data;
    }

    get volume(){
      return this.quantidade * this.valor;  
    }
}
