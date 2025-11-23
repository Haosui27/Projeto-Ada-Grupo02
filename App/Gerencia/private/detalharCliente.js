const { Cliente } = require("../../Cliente/private/Cliente");
const { cabecalhoCentralizado} = require('../../shared/personalizaPrompt')
const { carregarClientes } = require("../Cliente/arquivoCliente");
const { formatSaldo, formatCpf } = require("../../shared/formats");

async function detalharCliente() {
    cabecalhoCentralizado("Movimentação(ões) de Cliente");

    let clientes = carregarClientes();
    
}

module.exports = { detalharCliente }