const { solicitarCPF, solicitarSaldo } = require("../../shared/entradas");
const { Transacao } = require("../../Transacao/Transacao");
const { carregarClientes, atualizarCliente } = require("./arquivoCliente");

async function transferencia(cliente) {
  const listaClientes = await carregarClientes();

  let cpf = solicitarCPF("Informe o cpf do destinatário: ");
  let valor = solicitarSaldo();

  const clienteDestino = listaClientes.find((c) => c.getCpf() === cpf);

  if (!clienteDestino) {
    console.log(
      "Não foi possível concluir transferência. Cliente destinatário não existe"
    );
    return;
  }

  if (cliente.getCpf() === cpf){
    console.log("Não é possível fazer transferências para si mesmo");
    return;    
  }

  if (cliente.getSaldo() < valor) {
    console.log("Saldo insuficiente para realizar a transferência.");
    return;
  }

  // Atualiza saldos
  cliente.saque(valor);
  clienteDestino.deposito(valor);

  // Registra transações
  const origemTransacao = new Transacao(
    "Origem Transferencia",
    valor,
    cpf,
    new Date().toISOString()
  );
  const destinoTransacao = new Transacao(
    "Destino Transferencia",
    valor,
    cliente.getCpf(),
    new Date().toISOString()
  );

  // Salva alterações
  await atualizarCliente(cliente, origemTransacao);
  await atualizarCliente(clienteDestino, destinoTransacao);

  console.log(
    `Transferência de R$ ${valor} realizada com sucesso para ${clienteDestino.getNome()}.`
  );
}

module.exports = { transferencia };
