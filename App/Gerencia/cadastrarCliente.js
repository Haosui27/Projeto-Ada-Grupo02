const { Gerente } = require("../Gerencia/Gerente");
const { salvarCliente } = require("../Cliente/arquivoCliente");
const { Cliente } = require("../Cliente/Cliente");
const { cabecalhoCentralizado } = require("../shared/personalizaPrompt");
const { solicitarCPF, solicitarNome, solicitarSaldo } = require("../shared/entradas");
const { Transacao } = require("../Transacao/Transacao");

const prompt = require("prompt-sync")();

async function cadastrarCliente(gerenteAtivo) {
  cabecalhoCentralizado("CADASTRAR CLIENTE");

  let cpf = solicitarCPF();

  let nome = solicitarNome();

  let saldoInicial = solicitarSaldo();

  // usa o método que usa a instância do Gerente logado
  const idGerente = gerenteAtivo.getId();
  const transacao = new Transacao(1, saldoInicial); // código 1 = Abertura de Conta
  let novoCliente = new Cliente(
    cpf,
    nome,
    saldoInicial,
    null,
    transacao.toJSON(),
    idGerente
  );

  console.clear();

  try {
    await salvarCliente(novoCliente);
  } catch (error) {
    console.error("Erro ao salvar cliente:", error.message);
  }
}

module.exports = { cadastrarCliente };
