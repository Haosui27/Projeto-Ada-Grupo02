const prompt = require("prompt-sync")();
const { verificarLogin } = require("./VerificarLogin");
const { menuGerente } = require("../Gerente/menuGerente");
const { menuCliente } = require("../Cliente/menuCliente");

async function tela() {
  while (true) {
    console.log(`
        =====================
        |   BANCO SOLARIS   |
        =====================
    `);

    const usuario = prompt("Login: ");
    const senha = prompt("Senha: ");
    const validacao = await verificarLogin(usuario, senha);

    switch (validacao) {
      case 1:
        // Mostra menu gerente
        menuGerente();
        break; // sai do loop
      case 2:
        // Mostra menu cliente
        menuCliente();
        break; // sai do loop
      case 3:
        // Primeiro acesso concluído -> apenas continue sem mensagem de erro
        continue;
      default:
        console.log("Usuário inválido! Tente novamente.\n");
        continue; // volta para pedir login de novo
    }

    // Se chegou aqui, login foi válido → encerra loop
    break;
  }
}

module.exports = { tela };