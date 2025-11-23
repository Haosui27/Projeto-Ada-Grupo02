class Transacao{
    #coTransacao;
    #valor;
    #destino;
    #data;

    constructor(transacao, valor, destino = null, data = new Date()){
        this.#coTransacao = transacao;
        this.#valor = valor;
        this.#destino = destino;
        this.#data = data;
    }

    getCoTransacao(){
        return this.#coTransacao;
    }

    toJSON(){
        return {
            coTransacao: this.#coTransacao,
            valor: this.#valor,
            destino: this.#destino,
            data: this.#data
        }
    }

    fromJSON(obj){
        return new Transacao(obj.coTransacao, obj.valor, obj.destino, obj.data);
    }
}

module.exports = { Transacao };