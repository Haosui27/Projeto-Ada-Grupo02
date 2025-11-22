class Cliente {
  #cpf;
  #nome;
  #saldo;
  #password;
  #transacoes;
  #senhaPadrao = "1234"

  constructor(cpf, nome, saldo) {
    this.#cpf = cpf;
    this.#nome = nome;
    this.#saldo = saldo;
    this.#password = this.#senhaPadrao;
    this.#transacoes = [];
  }

  toJSON() {
    return {
      cpf: this.#cpf,
      nome: this.#nome,
      saldo: this.#saldo,
      password: this.#password,
      transacoes: this.#transacoes,
    };
  }

  registrarTransacao(tipo, valor, destino = null) {
    this.#transacoes.push({
      tipo,
      valor,
      destino,
      data: new Date(),
    });
  }

  setSenhaNova(senha) {
    this.#password = senha;
  }

}

module.exports = { Cliente };
