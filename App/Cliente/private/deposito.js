const { Transacao } = require("../../Transacao/Transacao");
const { Cliente } = require("./Cliente");
const { atualizarCliente } = require("./arquivoCliente");
const { cabecalhoCentralizado } = require("../../shared/personalizaPrompt");
const prompt = require("prompt-sync")();

async function deposito(cliente) {
  console.clear();
  cabecalhoCentralizado("REALIZAR DEPOSITO");

  const valor = parseFloat(prompt("Valor do depósito: "));

  if (valor > 0) {
    cliente.deposito(valor);
    const deposito = new Transacao("Deposito", valor, null, new Date());

    await atualizarCliente(cliente, deposito);

    console.log("Depósito realizado com sucesso!");
  } else {
    console.log("Valor inválido.");
  }

  console.clear();
}

module.exports = { deposito };
