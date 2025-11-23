const { extratoPorCpf } = require("../../Cliente/private/extrato");
const { solicitarCPF } = require("../../shared/entradas");
const { cabecalhoCentralizado } = require("../../shared/personalizaPrompt");

async function extratoG(){
    cabecalhoCentralizado("Movimentação Cliente");

    let cpfCliente = solicitarCPF();

    await extratoPorCpf(cpfCliente);
}

module.exports = { extratoG };