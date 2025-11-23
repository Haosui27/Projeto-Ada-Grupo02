const { Gerente } = require("../Gerencia/private/Gerente");
const { Cliente } = require("../Cliente/private/Cliente");
const { menuGerente } = require("../Gerencia/shared/menuGerente");
const { menuCliente } = require("../Cliente/shared/menuCliente");
const { cabecalhoCentralizado } = require("../shared/personalizaPrompt");
const { verificarLogin } = require("./VerificarLogin");
const prompt = require("prompt-sync")();

async function tela() {
  while (true) {
    cabecalhoCentralizado("BANCO SOLARIS");

    const usuario = prompt("Login: ");
    const senha = prompt("Senha: ", { echo: "*" });
    const usuarioAtivo = await verificarLogin(usuario, senha);

    if (!usuarioAtivo) {
      continue;
    }

    if (usuarioAtivo instanceof Gerente) {
      console.clear();
      menuGerente(usuarioAtivo);
    } else if (usuarioAtivo instanceof Cliente) {
      console.clear();
      menuCliente(usuarioAtivo);
    }

    break; // login válido → encerra loop
  }
}

module.exports = { tela };
