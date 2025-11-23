const prompt = require("prompt-sync")();
const { verificarLogin } = require("./VerificarLogin");
const { menuGerente } = require("../Gerencia/menuGerente");
const { menuCliente } = require("../Cliente/menuCliente");
const { Gerente } = require("../Gerencia/Gerente");
const { Cliente } = require("../Cliente/Cliente");

async function tela() {
  while (true) {
    console.log(`
        =====================
        |   BANCO SOLARIS   |
        =====================
    `);

    const usuario = prompt("Login: ");
    const senha = prompt("Senha: ", { echo: "*" });
    const usuarioAtivo = await verificarLogin(usuario, senha);

    if (!usuarioAtivo) {
      console.log("Usuário inválido! Tente novamente.\n");
      continue;
    }

    if (usuarioAtivo instanceof Gerente) {
      menuGerente(usuarioAtivo);
    } else if (usuarioAtivo instanceof Cliente) {
      menuCliente(usuarioAtivo);
    }

    break; // login válido → encerra loop
  }
}

module.exports = { tela };