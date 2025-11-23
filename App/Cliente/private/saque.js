const { Transacao } = require("../../Transacao/Transacao");
const { Cliente } = require("../private/Cliente");
const { cabecalhoCentralizado } = require("../../shared/personalizaPrompt");
const { atualizarCliente } = require("../private/arquivoCliente");
const prompt = require("prompt-sync")();

async function saque(cliente) {
  console.clear();
  cabecalhoCentralizado("REALIZAR SAQUE");

  const valor = parseFloat(prompt("Valor do saque: "));

  if (valor > 0) {
    cliente.saque(valor);
    const saque = new Transacao("Saque", valor, null, new Date());

    await atualizarCliente(cliente, saque);

    console.log("Depósito realizado com sucesso!");
  } else {
    console.log("Valor inválido.");
  }

  console.clear();
}

module.exports = { saque };
