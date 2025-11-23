const { Cliente } = require("../Cliente/Cliente");

class Gerente {
  #coGerente;
  #nome;
  #password;

  constructor(id, nome, senha) {
    this.#coGerente = id;
    this.#nome = nome;
    this.#password = senha;
  }

  static fromJSON(obj) {
    return new Gerente(obj.coGerente, obj.nome, obj.password);
  }

  getId() {
    return this.#coGerente;
  }

  getNome() {
    return this.#nome;
  }

  getPassword() {
    return this.#password;
  }
}

module.exports = { Gerente };