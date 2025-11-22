class Cliente {
  #cpf;
  #nome;
  #saldo;
  #password;
  #transacoes;
  #senhaPadrao = "1234";

  constructor(cpf, nome, saldo, password = null, transacoes = []) {
    this.#cpf = cpf;
    this.#nome = nome;
    this.#saldo = saldo;
    this.#password = password ?? this.#senhaPadrao;
    this.#transacoes = transacoes;
  }

  // Método para gravar objetos no arquivo JSON
  toJSON() {
    return {
      cpf: this.#cpf,
      nome: this.#nome,
      saldo: this.#saldo,
      password: this.#password,
      transacoes: this.#transacoes,
    };
  }

  // Método para construir instanciar objetos a partir do JSON
  static fromJSON(obj) {
    return new Cliente(obj.cpf, obj.nome, obj.saldo, obj.password, obj.transacoes);
  }

  // Método pra registro de transações
  registrarTransacao(tipo, valor, destino = null) {
    this.#transacoes.push({
      tipo,
      valor,
      destino,
      data: new Date(),
    });
  }

  getCpf(){
    return this.#cpf;
  }

  getNome(){
    return this.#nome;
  }

  getPassword(){
    return this.#password;
  }

  // Método para atribuir nova senha
  setSenhaNova(senha) {
    this.#password = senha;
  }

  isPrimeiroAcesso(){
    return this.#password === null || this.#password === this.#senhaPadrao;
  }
}

module.exports = { Cliente };