class Transacao {
  #coTransacao;
  #valor;
  #destino;
  #data;

  constructor(transacao, valor, destino = null, data = null) {
    this.#coTransacao = transacao;
    this.#valor = valor;
    this.#destino = destino;
    this.#data = data ? new Date(data) : new Date();
  }

  getCoTransacao() {
    return this.#coTransacao;
  }

  getValor() {
    return this.#valor;
  }

  getDestino() {
    return this.#destino;
  }

  getData() {
    return this.#data;
  }

  toJSON() {
    // Formata para ISO no fuso de Brasília
    const formatter = new Intl.DateTimeFormat("sv-SE", {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    const parts = formatter.formatToParts(this.#data);
    const isoLike = `${parts.find(p => p.type === "year").value}-${parts.find(p => p.type === "month").value}-${parts.find(p => p.type === "day").value}T${parts.find(p => p.type === "hour").value}:${parts.find(p => p.type === "minute").value}:${parts.find(p => p.type === "second").value}-03:00`;

    return {
      coTransacao: this.#coTransacao,
      valor: this.#valor,
      destino: this.#destino,
      data: isoLike
    };
  }

  static fromJSON(obj) {
    return new Transacao(
      obj.coTransacao,
      obj.valor,
      obj.destino,
      obj.data
    );
  }
}

module.exports = { Transacao };