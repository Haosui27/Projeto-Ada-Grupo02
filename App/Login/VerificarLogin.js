const { verificaSeCliente } = require("../Cliente/shared/verificacaoCliente");
const { verificaSeGerente } = require("../Gerencia/shared/verificacaoGerente");

async function verificarLogin(usuario, senha) {
  try {
    // Se for CPF (11 dígitos numéricos)
    const ehCPF = /^\d{11}$/.test(usuario);

    if (ehCPF) {
      // Cliente identificado pelo CPF
      return await verificaSeCliente(usuario, senha);
    } else {
      // Caso contrário, assume login de gerente
      return await verificaSeGerente(usuario, senha);
    }
  } catch (err) {
    console.error("Erro ao verificar login:", err.message);
    return null;
  }
}

module.exports = { verificarLogin };