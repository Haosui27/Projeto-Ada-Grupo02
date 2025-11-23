const { Gerente } = require("../private/Gerente");
const { Cliente } = require("../../Cliente/private/Cliente");
const { Transacao } = require("../../Transacao/Transacao");
const { salvarCliente } = require("../../Cliente/private/arquivoCliente");
const {
  solicitarCPF,
  solicitarNome,
  solicitarSaldo,
} = require("../../shared/entradas");
const { cabecalhoCentralizado } = require("../../shared/personalizaPrompt");
const { formatData } = require("../../shared/formats");

async function cadastrarCliente(gerenteAtivo) {
  cabecalhoCentralizado("CADASTRAR CLIENTE");

  let cpf = solicitarCPF();

  let nome = solicitarNome();

  let saldoInicial = solicitarSaldo();

  // usa o método que usa a instância do Gerente logado
  const idGerente = gerenteAtivo.getId();
  const data = formatData();
  const transacao = new Transacao(
    "Abertura de Conta",
    saldoInicial,
    null,
    data
  );
  let novoCliente = new Cliente(
    cpf,
    nome,
    saldoInicial,
    null,
    [transacao],
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
