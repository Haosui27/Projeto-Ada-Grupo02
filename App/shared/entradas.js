const prompt = require("prompt-sync")();

function solicitarCPF() {
  let cpf;

  do {
    cpf = String(prompt("Informe o CPF (11 dígitos): ").replace(/\D/g, "")); // remove caracteres não numéricos

    if (!cpf || cpf.length !== 11) {
      console.log("CPF inválido! Tente novamente.\n");
    }
  } while (!cpf || cpf.length !== 11);

  return cpf;
}

function solicitarNome() {
  let nome;

  do {
    nome = String(prompt("Informe o nome: "));

    if (!nome.trim()) {
      console.log("Nome não pode estar vazio!");
    }
  } while (!nome);

  return nome;
}

function solicitarSaldo() {
  let saldo;

  do {
    saldo = Number(prompt("Informe o Saldo Inicial: "));

    if (Number.isNaN(saldo) || saldo < 0) {
      console.log("Saldo inicial inválido! Digite um número maior ou igual a zero.\n");
    }
  } while (Number.isNaN(saldo) || saldo < 0);

  return saldo;
}

module.exports = { solicitarCPF, solicitarNome, solicitarSaldo };
