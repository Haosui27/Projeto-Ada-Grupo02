const { Gerente } = require("../Gerencia/Gerente");
const { salvarCliente } = require("../Cliente/arquivoCliente");
const { Cliente } = require("../Cliente/Cliente");

const prompt = require("prompt-sync")();

async function cadastrarCliente(gerenteAtivo) {
  console.log(`===== CADASTRAR CLIENTE =====`);

  const cpf = String(prompt("Informe o cpf: "));
  if (!cpf || cpf.length !== 11) {
    console.log("CPF inválido!");
    return;
  }

  const nome = String(prompt("Informe o nome: "));
  if (!nome.trim()) {
    console.log("Nome não pode estar vazio!");
    return;
  }

  const valorInicial = parseFloat(prompt("Informe o Saldo Inicial: "));
  if (isNaN(valorInicial) || valorInicial < 0) {
    console.log("Saldo inicial inválido!");
    return;
  }

  // usa o método da instância Gerente
  const idGerente = gerenteAtivo.getId();
  const transacao = [{
      tipo: "cadastro",
      valor: valorInicial,
      destino: null,
      data: new Date()
    }];
  let novoCliente = new Cliente(cpf, nome, valorInicial, null, transacao, idGerente);

  try {
    await salvarCliente(novoCliente);
    console.log("Cliente cadastrado com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar cliente:", error.message);
  }
}

module.exports = { cadastrarCliente };
