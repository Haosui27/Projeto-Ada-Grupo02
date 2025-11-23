const { cabecalhoCentralizado } = require("../../shared/personalizaPrompt");
const { cadastrarCliente } = require("../private/cadastrarCliente");
const { extratoG } = require("../private/extratoCliente");
const { listarClientes } = require("../private/listarClientes");

const prompt = require("prompt-sync")();

async function menuGerente(gerenteAtivo) {
  do {
    cabecalhoCentralizado("MENU GERENTE");
    console.log(" 1 - Cadastrar clientes\n 2 - Listar clientes\n 3 - Detalhar clientes\n 0 - Sair\n");

    menu = prompt("Digite a opção desejada: ");

    switch (menu) {
      case "1":
        console.clear();
        await cadastrarCliente(gerenteAtivo);
        break;
      case "2":
        console.clear();
        await listarClientes();
        break;
      case "3":
        console.clear();
        await extratoG();
        break;
      case "0":
        console.clear();
        console.log("Saindo do Sistema. Volte Sempre!");
        break;
      default:
        console.clear();
        console.log("Opção Inválida. Tente novamente!");
        break;
    }
  } while (menu !== "0"); //deixei assim para que retorne para o menu até acertar a opção ou digita 0 pra sair
}

module.exports = {menuGerente};
