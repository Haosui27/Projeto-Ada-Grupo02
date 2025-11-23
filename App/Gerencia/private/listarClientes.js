const { carregarClientes } = require("../../Cliente/private/arquivoCliente");
const { Cliente } = require("../../Cliente/private/Cliente");
const { formatSaldo, formatCpf } = require("../../shared/formats");
const { cabecalhoCentralizado } = require("../../shared/personalizaPrompt");


async function listarClientes() {
    const listaClientes = await carregarClientes();

    cabecalhoCentralizado("LISTA DE CLIENTES");
    
    listaClientes.forEach(cliente => {
        let saldo = formatSaldo(cliente.getSaldo());
        let cpf = formatCpf(cliente.getCpf())

        console.log(`${cpf} - ${cliente.getNome()} - Saldo: R$ ${saldo}`);       
    });
}

module.exports = { listarClientes };