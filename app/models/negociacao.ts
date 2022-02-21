export class Negociacao{
    /*
        Em typescript, se vc deixar private no construtor 
        por de baixo dos panos, o Typescript cria atributo de suas asinaturas privadas
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
