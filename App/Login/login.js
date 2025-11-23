const prompt = require("prompt-sync")();
const { verificarLogin } = require("./VerificarLogin");
const { menuGerente } = require("../Gerencia/menuGerente");
const { menuCliente } = require("../Cliente/menuCliente");
const { Gerente } = require("../Gerencia/Gerente");
const { Cliente } = require("../Cliente/Cliente");
const { cabecalhoCentralizado } = require("../shared/personalizaPrompt");

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