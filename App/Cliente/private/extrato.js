const { Cliente } = require("./Cliente");
const { cabecalhoCentralizado } = require("../../shared/personalizaPrompt");
const { carregarClientes } = require("../private/arquivoCliente");
const { formatData, formatSaldo } = require("../../shared/formats");

// Função que recebe um JSON (array de clientes) e um CPF
async function extratoPorCpf(cpf) {
  const clientes = await carregarClientes();
  const cliente = clientes.find(c => c.getCpf() === cpf);

  if (!cliente) {
    console.log("Cliente não encontrado!");
    return null;
  }

  cabecalhoCentralizado("EXTRATO")
  console.log(`Nome: ${cliente.getNome()}`);
  console.log(`CPF: ${cliente.getCpf()}`);
  console.log("--------------------------");

  const transacoes = cliente.toJSON().transacoes;
  if (transacoes.length === 0) {
    console.log("Nenhuma transação registrada.");
  } else {
    transacoes.forEach((t, index) => {
      console.log(
        `${index + 1}. ${t.coTransacao} | Valor: ${formatSaldo(t.valor)} | Destino: ${t.destino ?? "-"} | Data: ${formatData(t.data)}`
      );
    });
  }

  console.log(`Saldo atual: ${formatSaldo(cliente.getSaldo())}`);

  return cliente;
}

module.exports = { extratoPorCpf };