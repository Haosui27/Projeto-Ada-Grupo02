// Cliente.js
class Cliente {
  #cpf;
  #nome;
  #saldo;
  #password;
  #transacoes;
  #senhaPadrao = "1234";
  #coGerente;

  constructor(cpf, nome, saldo, password = null, transacoes = [], gerente) {
    this.#cpf = cpf;
    this.#nome = nome;
    this.#saldo = saldo;
    this.#password = password ?? this.#senhaPadrao;
    this.#transacoes = transacoes;
    this.#coGerente = gerente;
  }

  toJSON() {
    return {
      cpf: this.#cpf,
      nome: this.#nome,
      saldo: this.#saldo,
      password: this.#password,
      transacoes: this.#transacoes,
      gerente: this.#coGerente
    };
  }

  static fromJSON(obj) {
    return new Cliente(obj.cpf, obj.nome, obj.saldo, obj.password, obj.transacoes, obj.gerente);
  }

  registrarTransacao(tipo, valor, destino = null) {
    this.#transacoes.push({ tipo, valor, destino, data: new Date() });
  }

  getCpf() { return this.#cpf; }
  getNome() { return this.#nome; }
  getPassword() { return this.#password; }
  getSaldo() { return this.#saldo; }
  deposito(valor) { this.#saldo += valor; }
  setSenhaNova(senha) { this.#password = senha; }
  isPrimeiroAcesso() { return this.#password === null || this.#password === this.#senhaPadrao; }
}

module.exports = { Cliente };